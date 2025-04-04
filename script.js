// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// 3D Galaxy Background with Moving Stars
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("bg"), alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Black deep space background
scene.background = new THREE.Color(0x000000);

// Position camera
camera.position.z = 10;

// Handle window resize
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Create stars (particles)
const particleCount = 300; // More stars
const particles = [];
const particleGeometry = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
const velocities = new Float32Array(particleCount * 3); // Star movement speed

for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

    velocities[i * 3] = (Math.random() - 0.5) * 0.002;
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.002;
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
}

particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
const particleMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1,
    transparent: true,
    opacity: 0.9
});
const particleMesh = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particleMesh);

// Lines between stars (constellations)
const lineGeometry = new THREE.BufferGeometry();
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x5555ff, transparent: true, opacity: 0.3 });
const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
scene.add(lineMesh);

// Animate moving stars like a looping video
function animateParticles() {
    let positions = particleGeometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];
        positions[i * 3 + 2] += velocities[i * 3 + 2];

        // Loop stars back if they go too far
        if (positions[i * 3] > 15 || positions[i * 3] < -15) velocities[i * 3] *= -1;
        if (positions[i * 3 + 1] > 15 || positions[i * 3 + 1] < -15) velocities[i * 3 + 1] *= -1;
        if (positions[i * 3 + 2] > 15 || positions[i * 3 + 2] < -15) velocities[i * 3 + 2] *= -1;
    }
    particleGeometry.attributes.position.needsUpdate = true;
}

// Update interconnected star lines dynamically
function updateConnections() {
    let positions = particleGeometry.attributes.position.array;
    let linePositions = [];
    for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
            let dx = positions[i * 3] - positions[j * 3];
            let dy = positions[i * 3 + 1] - positions[j * 3 + 1];
            let dz = positions[i * 3 + 2] - positions[j * 3 + 2];
            let distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (distance < 3) { // Connect only close stars
                linePositions.push(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
                linePositions.push(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
            }
        }
    }
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    lineGeometry.attributes.position.needsUpdate = true;
}

// Twinkling effect (stars flickering)
function twinkleStars() {
    particleMaterial.opacity = 0.7 + Math.sin(Date.now() * 0.001) * 0.2;
}

// Animation loop (runs infinitely like a video)
function animate() {
    requestAnimationFrame(animate);
    animateParticles();
    twinkleStars();
    updateConnections();
    renderer.render(scene, camera);
}
animate();
