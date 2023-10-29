gsap.from(".links", {
    y: 10,
    delay: .4,
    opacity: 0,
    duration: 1,
    ease: Power2
});

Shery.textAnimate(".ephemeral span", {
    style: 2,
    y: 10,
    delay: 0.6,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from("#home > div", {
    y: 50,
    stagger: .3,
    opacity: 0,
    ease: Expo,
    duration: 1,
})

Shery.imageEffect(".ephemeral_img", {
    style: 3,
    config: { "uFrequencyX": { "value": 14.05, "range": [0, 100] }, "uFrequencyY": { "value": 15.7, "range": [0, 100] }, "uFrequencyZ": { "value": 17.36, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 39.53 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7499999673399215 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.56, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
});

Shery.imageEffect(".img", {
    style: 5,
    config: { "a": { "value": 1.49, "range": [0, 30] }, "b": { "value": -0.82, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7007916768391927 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.5, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }
});

gsap.from(".ephemeral_img", {
    y: 70,
    opacity: 0,
    duration: 2,
    ease: Expo
})

Shery.imageEffect(".packaging_images", {
    style: 5,
    gooey: true,
    config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": -0.92, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.9917857578822544 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 1.23, "range": [1, 15] }, "durationOut": { "value": 1.11, "range": [0.1, 5] }, "durationIn": { "value": 0.95, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.91, "range": [0, 10] }, "metaball": { "value": 0.199788, "range": [0, 2], "_gsap": { "id": 33 } }, "discard_threshold": { "value": 0.54, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.23, "range": [0, 2] }, "noise_scale": { "value": 17.36, "range": [0, 100] } }
})

const button = document.querySelector(".video_content button")
const video = document.querySelector(".video");

button.addEventListener("mouseover", () => {
    video.style.opacity = 1;
})

button.addEventListener("mouseleave", () => {
    video.style.opacity = 0;
})