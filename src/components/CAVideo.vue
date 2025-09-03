<script setup>
import { ref, onMounted, nextTick } from "vue";

// Fix video path imports to use correct paths for GitHub Pages
const ctVideos = import.meta.glob("/src/assets/video/ct/**/*.mp4", {
  eager: false,
});
const exVideos = import.meta.glob("/src/assets/video/ex/**/*.mp4", {
  eager: false,
});

// Current playing video
const currentVideo = ref("");
const currentPlayingVideo = ref(null);

// Playlist data storage
const playlistData1 = ref([]);
const playlistData2 = ref([]);
const activePlaylist = ref(1);

// Video element reference
const videoPlayer = ref(null);

// Video cache for better performance
const videoCache = new Map();

// Simplified volume control
const volume = ref(1.0);

// Play video with caching - fix path handling
const playVideo = async (src) => {
  if (!videoPlayer.value) return;

  try {
    // Update path handling for GitHub Pages
    const normalizedSrc = src.replace("/src/assets", "./assets");

    // Check cache first
    if (!videoCache.has(src)) {
      const module = await (src.includes("/ct/")
        ? ctVideos[src]()
        : exVideos[src]());
      videoCache.set(src, module.default);
    }

    currentVideo.value = videoCache.get(src);
    currentPlayingVideo.value = src;
    videoPlayer.value.volume = volume.value;
    videoPlayer.value.load();
    await videoPlayer.value.play();
  } catch (err) {
    console.error("Failed to play video:", err, src);
  }
};

// Process video paths and organize into playlist
const processVideoPaths = async (videos, defaultPath) => {
  const groups = {};

  for (const [path] of Object.entries(videos)) {
    const match = path.match(/\/([^/]+)\/[^/]+\.mp4$/);
    if (!match) continue;

    const folderName = match[1];
    if (!groups[folderName]) {
      groups[folderName] = {
        title: folderName,
        defaultOpen: true,
        videos: [],
      };
    }

    groups[folderName].videos.push({
      title: String(groups[folderName].videos.length + 1).padStart(2, "0"),
      src: path,
    });
  }

  return Object.values(groups);
};

// Initialize playlist without auto-play
onMounted(async () => {
  try {
    const [list1, list2] = await Promise.all([
      processVideoPaths(ctVideos, "Beijing"),
      processVideoPaths(exVideos, "Beijing"),
    ]);

    playlistData1.value = list1;
    playlistData2.value = list2;

    // Set and load initial video
    if (list1[0]?.videos[0]) {
      const defaultSrc = list1[0].videos[0].src;

      const module = await ctVideos[defaultSrc]();
      videoCache.set(defaultSrc, module.default);

      currentVideo.value = module.default;
      currentPlayingVideo.value = defaultSrc;

      nextTick(() => {
        if (videoPlayer.value) {
          videoPlayer.value.load();
        }
      });
    }
  } catch (err) {
    console.error("Failed to initialize videos:", err);
  }
});

// Switch playlist
const switchPlaylist = (playlistId) => {
  activePlaylist.value = playlistId;
};
</script>

<template>
  <section class="page-section bg-light" id="video-section">
    <div class="container">
      <!-- Section Title -->
      <div class="text-center mb-5">
        <h2 class="section-heading text-uppercase">课程视频</h2>
      </div>

      <!-- Video Player and Playlist Layout -->
      <div class="row">
        <!-- Video Player Section -->
        <div class="col-lg-8 mb-4">
          <div class="video-player">
            <video
              ref="videoPlayer"
              controls
              preload="metadata"
              controlsList="nodownload"
              @contextmenu.prevent
            >
              <source :src="currentVideo" type="video/mp4" />
              Browser does not support video playback
            </video>
          </div>
        </div>

        <!-- Playlist Section -->
        <div class="col-lg-4">
          <!-- Playlist Switch Buttons -->
          <div class="playlist-switcher mb-4">
            <button
              class="btn btn-primary me-2"
              :class="{ active: activePlaylist === 1 }"
              @click="switchPlaylist(1)"
            >
              临床调整
            </button>
            <button
              class="btn btn-primary"
              :class="{ active: activePlaylist === 2 }"
              @click="switchPlaylist(2)"
            >
              学习心得
            </button>
          </div>

          <!-- Playlist Container -->
          <div class="playlist-container">
            <!-- Clinical Adjustment Playlist -->
            <div v-show="activePlaylist === 1" class="playlist">
              <div
                v-for="(group, index) in playlistData1"
                :key="index"
                class="playlist-group"
              >
                <!-- Group Header -->
                <div class="playlist-header">
                  {{ group.title }}
                </div>
                <!-- Video Items -->
                <div class="playlist-items">
                  <div
                    v-for="video in group.videos"
                    :key="video.src"
                    class="playlist-item"
                    :class="{
                      'playlist-item-active': currentPlayingVideo === video.src,
                    }"
                    @click="playVideo(video.src)"
                  >
                    {{ video.title }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Learning Experience Playlist -->
            <div v-show="activePlaylist === 2" class="playlist">
              <div
                v-for="(group, index) in playlistData2"
                :key="index"
                class="playlist-group"
              >
                <div
                  class="playlist-header"
                  @click="(e) => toggleGroup(e, index)"
                >
                  {{ group.title }}
                </div>
                <div class="playlist-items">
                  <div
                    v-for="video in group.videos"
                    :key="video.src"
                    class="playlist-item"
                    :class="{
                      'playlist-item-active': currentPlayingVideo === video.src,
                    }"
                    @click="playVideo(video.src)"
                  >
                    {{ video.title }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.video-player {
  position: relative;
  width: 100%;
  max-height: 80vh;
  background: #000;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  aspect-ratio: 4 / 3;
}

.video-player video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

.playlist-switcher {
  display: flex;
  justify-content: center;
}

.playlist-switcher .btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
}

.playlist-switcher .btn.active {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}

.playlist-container {
  height: calc(100vh - 400px);
  min-height: 300px;
  max-height: 600px;
  overflow-y: auto;
  border: 1px solid var(--bs-border-color);
  border-radius: 0.5rem;
  background: #fff;
}

.playlist-group {
  border-bottom: 1px solid var(--bs-border-color);
}

.playlist-header {
  padding: 0.75rem 1rem;
  background-color: var(--bs-gray-200);
  font-weight: 500;
  color: var(--bs-gray-700);
}

.playlist-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  gap: 0.35rem;
  padding: 0.5rem;
  background: #fff;
}

.playlist-item {
  aspect-ratio: 2/1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--bs-gray-700);
  background-color: var(--bs-light);
  border: 1px solid var(--bs-border-color);
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.playlist-item:hover {
  background-color: var(--bs-primary);
  color: white;
  border-color: var(--bs-primary);
  transform: scale(1.05);
}

.playlist-item-active {
  background-color: var(--bs-primary);
  color: white;
  border-color: var(--bs-primary);
  position: relative;
}

.playlist-item-active::after {
  content: "";
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  border: 2px solid var(--bs-primary);
  border-radius: 0.35rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 991.98px) {
  .playlist-container {
    height: auto;
    max-height: 400px;
  }

  .playlist-items {
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  }

  .playlist-item {
    font-size: 0.8rem;
  }

  .video-player {
    margin-bottom: 1rem;
    max-height: 70vh;
  }
}
</style>