// List of all media files
const mediaFiles = [
    { type: 'image', src: 'IMG_0001.JPG' },
    { type: 'video', src: 'MVI_0002.MP4' },
    { type: 'video', src: 'MVI_0003.MP4' },
    { type: 'video', src: 'MVI_0004.MP4' },
    { type: 'video', src: 'MVI_0005.MP4' },
    { type: 'image', src: 'IMG_0006.JPG' },
    { type: 'image', src: 'IMG_0007.JPG' },
    { type: 'image', src: 'IMG_0008.JPG' },
    { type: 'image', src: 'IMG_0009.JPG' },
    { type: 'image', src: 'IMG_0010.JPG' },
    { type: 'image', src: 'IMG_0011.JPG' },
    { type: 'image', src: 'IMG_0012.JPG' },
    { type: 'image', src: 'IMG_0013.JPG' },
    { type: 'image', src: 'IMG_0014.JPG' },
    { type: 'image', src: 'IMG_0015.JPG' },
    { type: 'image', src: 'IMG_0016.JPG' },
    { type: 'image', src: 'IMG_0017.JPG' },
    { type: 'video', src: 'MVI_0018.MP4' },
    { type: 'video', src: 'MVI_0019.MP4' },
    { type: 'video', src: 'MVI_0020.MP4' },
    { type: 'image', src: 'IMG_0021.JPG' },
    { type: 'video', src: 'MVI_0022.MP4' },
    { type: 'video', src: 'MVI_0023.MP4' },
    { type: 'image', src: 'IMG_0024.JPG' },
    { type: 'image', src: 'IMG_0025.JPG' },
    { type: 'video', src: 'MVI_0026.MP4' },
    { type: 'video', src: 'MVI_0027.MP4' },
    { type: 'video', src: 'MVI_0028.MP4' },
    { type: 'video', src: 'MVI_0029.MP4' },
    { type: 'image', src: 'IMG_0030.JPG' },
    { type: 'image', src: 'IMG_0031.JPG' },
    { type: 'image', src: 'IMG_0032.JPG' },
    { type: 'video', src: 'MVI_0033.MP4' },
    { type: 'image', src: 'IMG_0034.JPG' },
    { type: 'image', src: 'IMG_0035.JPG' },
    { type: 'image', src: 'IMG_0036.JPG' },
    { type: 'image', src: 'IMG_0037.JPG' },
    { type: 'image', src: 'IMG_0038.JPG' },
    { type: 'video', src: 'MVI_0039.MP4' },
    { type: 'image', src: 'IMG_0040.JPG' },
    { type: 'image', src: 'IMG_0041.JPG' },
    { type: 'image', src: 'IMG_0042.JPG' },
    { type: 'image', src: 'IMG_0043.JPG' },
    { type: 'image', src: 'IMG_0044.JPG' },
    { type: 'video', src: 'MVI_0045.MP4' },
    { type: 'image', src: 'IMG_0046.JPG' },
    { type: 'image', src: 'IMG_0047.JPG' },
    { type: 'video', src: 'MVI_0048.MP4' },
    { type: 'video', src: 'MVI_0049.MP4' },
    { type: 'video', src: 'MVI_0050.MP4' },
    { type: 'video', src: 'MVI_0051.MP4' },
    { type: 'video', src: 'MVI_0052.MP4' },
    { type: 'image', src: 'IMG_0053.JPG' },
    { type: 'image', src: 'IMG_0054.JPG' },
    { type: 'image', src: 'IMG_0055.JPG' },
    { type: 'image', src: 'IMG_0056.JPG' },
    { type: 'image', src: 'IMG_0057.JPG' },
    { type: 'image', src: 'IMG_0058.JPG' },
    { type: 'image', src: 'IMG_0059.JPG' },
    { type: 'image', src: 'IMG_0060.JPG' },
    { type: 'image', src: 'IMG_0061.JPG' },
    { type: 'image', src: 'IMG_0062.JPG' },
    { type: 'image', src: 'IMG_0063.JPG' },
    { type: 'image', src: 'IMG_0064.JPG' },
    { type: 'image', src: 'IMG_0065.JPG' },
    { type: 'image', src: 'IMG_0066.JPG' },
    { type: 'image', src: 'IMG_0067.JPG' },
    { type: 'image', src: 'IMG_0068.JPG' },
    { type: 'image', src: 'IMG_0069.JPG' },
    { type: 'image', src: 'IMG_0070.JPG' },
    { type: 'image', src: 'IMG_0071.JPG' },
    { type: 'image', src: 'IMG_0072.JPG' },
    { type: 'video', src: 'MVI_0073.MP4' },
    { type: 'video', src: 'MVI_0075.MP4' },
    { type: 'video', src: 'MVI_0076.MP4' },
    { type: 'video', src: 'MVI_0077.MP4' },
    { type: 'video', src: 'MVI_0078.MP4' },
    { type: 'image', src: 'IMG_0079.JPG' },
    { type: 'image', src: 'IMG_0080.JPG' },
    { type: 'image', src: 'IMG_0081.JPG' },
    { type: 'video', src: 'MVI_0082.MP4' },
    { type: 'image', src: 'IMG_0083.JPG' },
    { type: 'video', src: 'MVI_0084.MP4' },
    { type: 'video', src: 'MVI_0085.MP4' },
    { type: 'video', src: 'MVI_0086.MP4' },
    { type: 'image', src: 'IMG_0087.JPG' },
    { type: 'image', src: 'IMG_0088.JPG' },
    { type: 'image', src: 'IMG_0089.JPG' },
    { type: 'image', src: 'IMG_0090.JPG' },
    { type: 'image', src: 'IMG_0091.JPG' },
    { type: 'image', src: 'IMG_0092.JPG' },
    { type: 'image', src: 'IMG_0093.JPG' },
    { type: 'image', src: 'IMG_0094.JPG' },
    { type: 'image', src: 'IMG_0095.JPG' },
    { type: 'image', src: 'IMG_0096.JPG' },
    { type: 'image', src: 'IMG_0097.JPG' },
    { type: 'image', src: 'IMG_0098.JPG' },
    { type: 'image', src: 'IMG_0099.JPG' },
    { type: 'image', src: 'IMG_0100.JPG' },
    { type: 'image', src: 'IMG_0101.JPG' },
    { type: 'video', src: 'MVI_0102.MP4' },
    { type: 'video', src: 'MVI_0103.MP4' },
    { type: 'image', src: 'IMG_0104.JPG' },
    { type: 'image', src: 'IMG_0105.JPG' },
    { type: 'image', src: 'IMG_0106.JPG' },
    { type: 'image', src: 'IMG_0107.JPG' },
    { type: 'image', src: 'IMG_0108.JPG' },
    { type: 'image', src: 'IMG_0109.JPG' },
    { type: 'image', src: 'IMG_0110.JPG' },
    { type: 'image', src: 'IMG_0111.JPG' },
    { type: 'video', src: 'MVI_0112.MP4' },
    { type: 'video', src: 'MVI_0113.MP4' },
    { type: 'image', src: 'IMG_0114.JPG' },
    { type: 'image', src: 'IMG_0115.JPG' },
    { type: 'image', src: 'IMG_0116.JPG' },
    { type: 'image', src: 'IMG_0117.JPG' },
    { type: 'image', src: 'IMG_0118.JPG' },
    { type: 'image', src: 'IMG_0119.JPG' },
    { type: 'image', src: 'IMG_0120.JPG' },
    { type: 'image', src: 'IMG_9847.JPG' },
    { type: 'image', src: 'IMG_9848.JPG' },
    { type: 'image', src: 'IMG_9849.JPG' },
    { type: 'image', src: 'IMG_9850.JPG' },
    { type: 'image', src: 'IMG_9851.JPG' },
    { type: 'video', src: 'MVI_9852.MP4' },
    { type: 'video', src: 'MVI_9853.MP4' },
    { type: 'image', src: 'IMG_9854.JPG' },
    { type: 'image', src: 'IMG_9855.JPG' },
    { type: 'image', src: 'IMG_9856.JPG' },
    { type: 'image', src: 'IMG_9857.JPG' },
    { type: 'video', src: 'MVI_9858.MP4' },
    { type: 'video', src: 'MVI_9859.MP4' },
    { type: 'image', src: 'IMG_9860.JPG' },
    { type: 'image', src: 'IMG_9861.JPG' },
    { type: 'image', src: 'IMG_9862.JPG' },
    { type: 'image', src: 'IMG_9863.JPG' },
    { type: 'image', src: 'IMG_9864.JPG' },
    { type: 'image', src: 'IMG_9865.JPG' },
    { type: 'image', src: 'IMG_9866.JPG' },
    { type: 'image', src: 'IMG_9867.JPG' },
    { type: 'image', src: 'IMG_9868.JPG' },
    { type: 'image', src: 'IMG_9869.JPG' },
    { type: 'image', src: 'IMG_9870.JPG' },
    { type: 'image', src: 'IMG_9871.JPG' },
    { type: 'image', src: 'IMG_9872.JPG' },
    { type: 'video', src: 'MVI_9873.MP4' },
    { type: 'video', src: 'MVI_9874.MP4' },
    { type: 'video', src: 'MVI_9875.MP4' },
    { type: 'video', src: 'MVI_9876.MP4' },
    { type: 'video', src: 'MVI_9877.MP4' },
    { type: 'video', src: 'MVI_9878.MP4' },
    { type: 'video', src: 'MVI_9879.MP4' },
    { type: 'video', src: 'MVI_9880.MP4' },
    { type: 'video', src: 'MVI_9881.MP4' },
    { type: 'video', src: 'MVI_9882.MP4' },
    { type: 'image', src: 'IMG_9883.JPG' },
    { type: 'image', src: 'IMG_9884.JPG' },
    { type: 'image', src: 'IMG_9885.JPG' },
    { type: 'image', src: 'IMG_9886.JPG' },
    { type: 'image', src: 'IMG_9887.JPG' },
    { type: 'image', src: 'IMG_9888.JPG' },
    { type: 'image', src: 'IMG_9889.JPG' },
    { type: 'image', src: 'IMG_9890.JPG' },
    { type: 'image', src: 'IMG_9891.JPG' },
    { type: 'image', src: 'IMG_9892.JPG' },
    { type: 'image', src: 'IMG_9893.JPG' },
    { type: 'image', src: 'IMG_9894.JPG' },
    { type: 'video', src: 'MVI_9895.MP4' },
    { type: 'image', src: 'IMG_9896.JPG' },
    { type: 'image', src: 'IMG_9897.JPG' },
    { type: 'image', src: 'IMG_9898.JPG' },
    { type: 'image', src: 'IMG_9899.JPG' },
    { type: 'image', src: 'IMG_9900.JPG' },
    { type: 'image', src: 'IMG_9901.JPG' },
    { type: 'image', src: 'IMG_9902.JPG' },
    { type: 'image', src: 'IMG_9903.JPG' },
    { type: 'image', src: 'IMG_9904.JPG' },
    { type: 'image', src: 'IMG_9905.JPG' },
    { type: 'video', src: 'MVI_9906.MP4' },
    { type: 'video', src: 'MVI_9907.MP4' },
    { type: 'image', src: 'IMG_9908.JPG' },
    { type: 'image', src: 'IMG_9909.JPG' },
    { type: 'image', src: 'IMG_9910.JPG' },
    { type: 'image', src: 'IMG_9911.JPG' },
    { type: 'image', src: 'IMG_9912.JPG' },
    { type: 'image', src: 'IMG_9913.JPG' },
    { type: 'image', src: 'IMG_9914.JPG' },
    { type: 'image', src: 'IMG_9915.JPG' },
    { type: 'image', src: 'IMG_9916.JPG' },
    { type: 'video', src: 'MVI_9917.MP4' },
    { type: 'video', src: 'MVI_9918.MP4' },
    { type: 'image', src: 'IMG_9919.JPG' },
    { type: 'image', src: 'IMG_9920.JPG' },
    { type: 'image', src: 'IMG_9921.JPG' },
    { type: 'image', src: 'IMG_9922.JPG' },
    { type: 'image', src: 'IMG_9923.JPG' },
    { type: 'image', src: 'IMG_9924.JPG' },
    { type: 'image', src: 'IMG_9925.JPG' },
    { type: 'image', src: 'IMG_9926.JPG' },
    { type: 'image', src: 'IMG_9927.JPG' },
    { type: 'image', src: 'IMG_9928.JPG' },
    { type: 'video', src: 'MVI_9929.MP4' },
    { type: 'video', src: 'MVI_9930.MP4' },
    { type: 'video', src: 'MVI_9931.MP4' },
    { type: 'image', src: 'IMG_9932.JPG' },
    { type: 'image', src: 'IMG_9933.JPG' },
    { type: 'image', src: 'IMG_9934.JPG' },
    { type: 'image', src: 'IMG_9935.JPG' },
    { type: 'image', src: 'IMG_9936.JPG' },
    { type: 'image', src: 'IMG_9937.JPG' },
    { type: 'image', src: 'IMG_9938.JPG' },
    { type: 'video', src: 'MVI_9939.MP4' },
    { type: 'video', src: 'MVI_9940.MP4' },
    { type: 'image', src: 'IMG_9941.JPG' },
    { type: 'image', src: 'IMG_9942.JPG' },
    { type: 'image', src: 'IMG_9943.JPG' },
    { type: 'image', src: 'IMG_9944.JPG' },
    { type: 'image', src: 'IMG_9945.JPG' },
    { type: 'image', src: 'IMG_9946.JPG' },
    { type: 'image', src: 'IMG_9948.JPG' },
    { type: 'image', src: 'IMG_9949.JPG' },
    { type: 'image', src: 'IMG_9950.JPG' },
    { type: 'image', src: 'IMG_9951.JPG' },
    { type: 'image', src: 'IMG_9952.JPG' },
    { type: 'image', src: 'IMG_9953.JPG' },
    { type: 'image', src: 'IMG_9954.JPG' },
    { type: 'image', src: 'IMG_9955.JPG' },
    { type: 'video', src: 'MVI_9958.MP4' },
    { type: 'video', src: 'MVI_9959.MP4' },
    { type: 'image', src: 'IMG_9960.JPG' },
    { type: 'image', src: 'IMG_9961.JPG' },
    { type: 'image', src: 'IMG_9962.JPG' },
    { type: 'image', src: 'IMG_9963.JPG' },
    { type: 'image', src: 'IMG_9964.JPG' },
    { type: 'image', src: 'IMG_9965.JPG' },
    { type: 'image', src: 'IMG_9966.JPG' },
    { type: 'image', src: 'IMG_9967.JPG' },
    { type: 'image', src: 'IMG_9968.JPG' },
    { type: 'image', src: 'IMG_9969.JPG' },
    { type: 'image', src: 'IMG_9970.JPG' },
    { type: 'image', src: 'IMG_9971.JPG' },
    { type: 'image', src: 'IMG_9972.JPG' },
    { type: 'image', src: 'IMG_9973.JPG' },
    { type: 'image', src: 'IMG_9974.JPG' },
    { type: 'image', src: 'IMG_9975.JPG' },
    { type: 'image', src: 'IMG_9976.JPG' },
    { type: 'image', src: 'IMG_9977.JPG' },
    { type: 'video', src: 'MVI_9979.MP4' },
    { type: 'image', src: 'IMG_9980.JPG' },
    { type: 'image', src: 'IMG_9981.JPG' },
    { type: 'image', src: 'IMG_9982.JPG' },
    { type: 'video', src: 'MVI_9983.MP4' },
    { type: 'video', src: 'MVI_9984.MP4' },
    { type: 'video', src: 'MVI_9985.MP4' },
    { type: 'image', src: 'IMG_9986.JPG' },
    { type: 'image', src: 'IMG_9987.JPG' },
    { type: 'image', src: 'IMG_9988.JPG' },
    { type: 'image', src: 'IMG_9989.JPG' },
    { type: 'image', src: 'IMG_9990.JPG' },
    { type: 'image', src: 'IMG_9991.JPG' },
    { type: 'image', src: 'IMG_9992.JPG' },
    { type: 'image', src: 'IMG_9993.JPG' },
    { type: 'image', src: 'IMG_9994.JPG' },
    { type: 'image', src: 'IMG_9995.JPG' },
    { type: 'image', src: 'IMG_9996.JPG' },
    { type: 'image', src: 'IMG_9997.JPG' },
    { type: 'image', src: 'IMG_9998.JPG' },
    { type: 'image', src: 'IMG_9999.JPG' }
];

let currentIndex = 0;

// Initialize gallery
function initGallery() {
    const gallery = document.getElementById('gallery');

    mediaFiles.forEach((media, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        if (media.type === 'image') {
            const img = document.createElement('img');
            img.src = media.src;
            img.alt = media.src;
            img.loading = 'lazy';
            item.appendChild(img);
        } else {
            const video = document.createElement('video');
            video.src = media.src;
            video.muted = true;
            video.preload = 'metadata';
            item.appendChild(video);

            const indicator = document.createElement('div');
            indicator.className = 'video-indicator';
            item.appendChild(indicator);
        }

        item.addEventListener('click', () => openLightbox(index));
        gallery.appendChild(item);
    });
}

// Open lightbox
function openLightbox(index) {
    currentIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';

    updateLightboxContent();
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxVideo = document.getElementById('lightbox-video');

    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';

    if (lightboxVideo.classList.contains('active')) {
        lightboxVideo.pause();
    }
}

// Update lightbox content
function updateLightboxContent() {
    const media = mediaFiles[currentIndex];
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');

    if (media.type === 'image') {
        // Load full-size image in lightbox
        lightboxImg.src = media.src;
        lightboxImg.classList.add('active');
        lightboxVideo.classList.remove('active');
        lightboxVideo.pause();
        lightboxVideo.src = '';
    } else {
        lightboxVideo.src = media.src;
        lightboxVideo.classList.add('active');
        lightboxImg.classList.remove('active');
        lightboxImg.src = '';
    }
}

// Navigate to previous item
function prevItem() {
    currentIndex = (currentIndex - 1 + mediaFiles.length) % mediaFiles.length;
    updateLightboxContent();
}

// Navigate to next item
function nextItem() {
    currentIndex = (currentIndex + 1) % mediaFiles.length;
    updateLightboxContent();
}

// Event listeners
document.getElementById('close').addEventListener('click', closeLightbox);
document.getElementById('prev').addEventListener('click', prevItem);
document.getElementById('next').addEventListener('click', nextItem);

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            prevItem();
        } else if (e.key === 'ArrowRight') {
            nextItem();
        }
    }
});

// Initialize on load
window.addEventListener('DOMContentLoaded', initGallery);
