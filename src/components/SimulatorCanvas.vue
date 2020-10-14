<template>
  <div id="container" class="transparent" style="width: 100%; height: 100%; z-index: 0;">
    <!-- <svg width="100%" height="100%" viewBox="-20 0 557 190" id="svg">
          <circle cx="100" cy="100" r="3" />
          <circle cx="300" cy="20" r="3" />
          <path id="path" d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"/>
          <g id="rect">
              <rect width="85" height="30" fill="dodgerblue" />
              <text x="10" y="19" font-size="14">SVG &lt;rect&gt;</text>
          </g>
      </svg> -->
    <v-stage :config="config">
        <v-layer>

            <!-- <v-path 
                id="path"
                class="offset" 
                ref="path"
                :config="{
                    data: 'M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37'
                }"
            /> -->

            <!-- Regulator -->
            <v-shape
                id="regulator"
                class="offset"
                ref="regulator" 
                :config="regulator"/>

            <!-- Phase 3 - Conduction Plates -->
            <v-shape
                id="p3-innerbox"
                class="offset" 
                :config="p3Plate2"/>

            <!-- Particles 3 -->
            <v-circle 
                ref="molecules3"
                v-for="(molecule, index) in particles3"
                :key="'pThree' + index"
                :config="{
                    x: molecule.x,
                    y: molecule.y,
                    id: index,
                    radius: molecule.radius,
                    opacity: 1,
                    draggable: true,
                    fill: 'yellow',
                    shadowColor: '#6f6f49',
                    shadowBlur: 2,
                }">
            </v-circle>

            <!-- Particles 4 -->
            <v-circle 
                ref="molecules4"
                v-for="(molecule, index) in particles4"
                :key="'pFour' + index"
                :config="{
                    x: molecule.x,
                    y: molecule.y,
                    id: index,
                    radius: molecule.radius,
                    opacity: 1,
                    draggable: true,
                    fill: 'yellow',
                    shadowColor: '#6f6f49',
                    shadowBlur: 2,
                }">
            </v-circle>

           
            <v-shape
                id="p3-innerbox"
                class="offset" 
                :config="p3Plate1"/>

            <!-- Phase 3 - Inner Box -->
            <v-shape
                id="p3-innerbox"
                class="offset" 
                :config="p3InnerBox"/>

            <!-- Phase 3 - Outer Box-->
            <v-shape
                id="p3-outerbox"
                class="offset" 
                :config="p3OuterBox"/>

            <!-- Wire -->
            <v-shape
                id="wire"
                class="offset" 
                :config="wire"/>

            <!-- Phase 3 - Cylinder -->
            <v-shape
                id="p2-cylinder"
                class="offset" 
                :config="p3Cylinder"/>

            <!-- Phase 2 -->
            <v-shape
                id="p2-cube"
                class="offset" 
                :config="p2Cube"/>

            <!-- Phase 2 - Cylinder -->
            <v-shape
                id="p2-cylinder"
                class="offset" 
                :config="p2Cylinder"/>

            
            <!-- Particles 2 -->
            <v-circle 
                ref="molecules2"
                v-for="(molecule, index) in particles2"
                :key="'pOneOut' + index"
                :config="{
                    x: molecule.x,
                    y: molecule.y,
                    radius: molecule.radius,
                    opacity: 1,
                    draggable: true,
                    fill: '#4e4e5e',
                    shadowColor: '#6f6f49',
                    shadowBlur: 2,
                }">
            </v-circle>

            <!-- Phase 1 -->
            <v-shape
                id="p1-cube"
                class="offset" 
                :config="p1Cube"/>

            <!-- Particles -->
            <v-circle 
                ref="molecules"
                v-for="(molecule, index) in particles"
                :key="'pOneIn' + index"
                :config="{
                    x: molecule.x,
                    y: molecule.y,
                    id: index,
                    radius: molecule.radius,
                    opacity: 1,
                    draggable: true,
                    fill: '#8e8e5e',
                    shadowColor: '#6f6f49',
                    shadowBlur: 2,
                }">
            </v-circle>
        </v-layer>
    </v-stage>

    <!-- Phase 1 Label -->
    <v-chip
        class="ma-2 elevation-2"
        color="green"
        text-color="white"
        style="position: absolute; top: 120px; left: 80px;"
    >
        <v-avatar
        left
        class="green darken-4"
        >
        1
        </v-avatar>
        Air Filtration Process
    </v-chip>

    <!-- Phase 2 Label -->
    <v-chip
        class="ma-2 elevation-2"
        color="green"
        text-color="white"
        style="position: absolute; top: 40px; left: 240px;"
    >
        <v-avatar
            left
            class="green darken-4"
        >
            2
        </v-avatar>
        Humidification Process
    </v-chip>

    <!-- Phase 3 Label -->
    <v-chip
        class="ma-2 elevation-2"
        color="green"
        text-color="white"
        style="position: absolute; top: 160px; left: 760px;"
    >
        <v-avatar
            left
            class="green darken-4"
        >
            3
        </v-avatar>
        Electrochemical Process
    </v-chip>

    <!-- Regulator Label -->
    <v-chip
        class="ma-2 elevation-2"
        color="green"
        text-color="white"
        style="position: absolute; top: 240px; left: 840px;"
      >
        Voltage Regulator
    </v-chip>

  </div>
</template>

<script>

import Konva from 'konva';
export default {
    props: {
        width: Number,
        height: Number,
        particle: Object,
        runSimulation: Boolean,
        duration: Number,
    },
    data(){
        return {
            config: {
                width: this.width,
                height: this.height,
                container: 'container',
            },
            particles: [],
            particles2: [],
            particles3: [],
            particles4: [],
            wire: {
                sceneFunc: function(context) {
                    let x = 658, 
                        y = 252,
                        x2 = 730,
                        y2 = 218;

                    context.globalAlpha = 1;

                    context.beginPath();
                    context.strokeStyle = 'red';
                    context.lineWidth = 5;
                    context.lineCap = "round";
                    context.moveTo(x, y);
                    context.lineTo(x + 136, y + 52);
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    context.strokeStyle = 'black';
                    context.lineWidth = 5;
                    context.lineCap = "round";
                    context.moveTo(x2, y2);
                    context.lineTo(x2 + 110, y2 + 64);
                    context.stroke();
                    context.closePath();
                },
                draggable: false,
            },
            regulator: {
                sceneFunc: function(context, shape) {
                    let x = 840, 
                        y = 380, 
                        wx = 50, 
                        wy = 50, 
                        h = 50;

                    context.globalAlpha = 1;

                    // left face
                    context.beginPath();
                    context.moveTo(x, y);
                    context.lineTo(x - wx, y - wx * 0.5);
                    context.lineTo(x - wx, y - h - wx * 0.5);
                    context.lineTo(x, y - h * 1);
                    context.closePath();
                    context.fillStyle = '#838357';
                    context.strokeStyle = '#7a7a51';
                    context.stroke();
                    context.fill();

                    // right face
                    context.beginPath();
                    context.moveTo(x, y);
                    context.lineTo(x + wy, y - wy * 0.5);
                    context.lineTo(x + wy, y - h - wy * 0.5);
                    context.lineTo(x, y - h * 1);
                    context.closePath();
                    context.fillStyle = '#6f6f49';
                    context.strokeStyle = '#676744';
                    context.stroke();
                    context.fill();

                    // center face
                    context.beginPath();
                    context.moveTo(x, y - h);
                    context.lineTo(x - wx, y - h - wx * 0.5);
                    context.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
                    context.lineTo(x + wy, y - h - wy * 0.5);
                    context.closePath();
                    context.fillStyle = '#989865';
                    context.strokeStyle = '#8e8e5e';
                    context.stroke();
                    context.fill();

                    context.fillStrokeShape(shape);

                },
                draggable: false,
            },
            p3Cylinder: {
                sceneFunc: function(context, shape) {

                    var myGradient = context.createLinearGradient(0, 0, 0, 170);
                    myGradient.addColorStop(0.5, "#6f6f49");
                    myGradient.addColorStop(1, "#838357");

                    context.globalAlpha = 0.9;

                    context.beginPath();
                    context.moveTo(660, 220);
                    context.quadraticCurveTo(670, 80, 560, 140);
                    context.lineTo(540, 110);
                    context.moveTo(540, 110);
                    context.quadraticCurveTo(700, 35, 690, 215);
                    context.lineTo(660, 220);
                    context.moveTo(690, 215);
                    context.quadraticCurveTo(680, 230, 660, 220);
                    context.fillStyle = myGradient;
                    // context.fillStyle = '#838357';
                    context.strokeStyle = '#6f6f49';
                    context.stroke();
                    context.fill();

                    context.fillStrokeShape(shape);
                },
                draggable: false,
            },
            p3InnerBox: {
                sceneFunc: function(context, shape) {
                    let x = 650, 
                        y = 340, 
                        wx = 60, 
                        wy = 100, 
                        h = 80;

                    context.globalAlpha = 0.4;

                    // left face
                    context.beginPath();
                    context.moveTo(x, y);
                    context.lineTo(x - wx, y - wx * 0.5);
                    context.lineTo(x - wx, y - h - wx * 0.5);
                    context.lineTo(x, y - h * 1);
                    context.closePath();
                    context.fillStyle = '#838357';
                    context.strokeStyle = '#7a7a51';
                    context.stroke();
                    context.fill();

                    // right face
                    context.beginPath();
                    context.moveTo(x, y);
                    context.lineTo(x + wy, y - wy * 0.5);
                    context.lineTo(x + wy, y - h - wy * 0.5);
                    context.lineTo(x, y - h * 1);
                    context.closePath();
                    context.fillStyle = '#6f6f49';
                    context.strokeStyle = '#676744';
                    context.stroke();
                    context.fill();

                    // center face
                    context.beginPath();
                    context.moveTo(x, y - h);
                    context.lineTo(x - wx, y - h - wx * 0.5);
                    context.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
                    context.lineTo(x + wy, y - h - wy * 0.5);
                    context.closePath();
                    context.fillStyle = '#989865';
                    context.strokeStyle = '#8e8e5e';
                    context.stroke();
                    context.fill();
                    context.fillStrokeShape(shape);
                },
                draggable: false,
            },
            p3Plate1: {
                sceneFunc: function(context, shape) {
                    let x = 650 + 10, 
                        y = 340 - 5, 
                        wx = 60, 
                        wy = 5, 
                        h = 80;
                        // x2 = 650 + 80,
                        // y2 = 340 - 40;

                    context.globalAlpha = 1;

                    // left face 1
                    context.beginPath();
                    context.moveTo(x, y);
                    context.lineTo(x - wx, y - wx * 0.5);
                    context.lineTo(x - wx, y - h - wx * 0.5);
                    context.lineTo(x, y - h * 1);
                    context.closePath();
                    context.fillStyle = '#838357';
                    context.strokeStyle = '#7a7a51';
                    context.stroke();
                    context.fill();

                    // right face 1
                    context.beginPath();
                    context.moveTo(x, y);
                    context.lineTo(x + wy, y - wy * 0.5);
                    context.lineTo(x + wy, y - h - wy * 0.5);
                    context.lineTo(x, y - h * 1);
                    context.closePath();
                    context.fillStyle = '#6f6f49';
                    context.strokeStyle = '#676744';
                    context.stroke();
                    context.fill();

                    // center face 1
                    context.beginPath();
                    context.moveTo(x, y - h);
                    context.lineTo(x - wx, y - h - wx * 0.5);
                    context.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
                    context.lineTo(x + wy, y - h - wy * 0.5);
                    context.closePath();
                    context.fillStyle = '#989865';
                    context.strokeStyle = '#8e8e5e';
                    context.stroke();
                    context.fill();
                    context.fillStrokeShape(shape);

                    
                },
                draggable: false,
            },
            p3Plate2: {
                sceneFunc: function(context, shape) {
                    let 
                        wx = 60, 
                        wy = 5, 
                        h = 80,
                        x2 = 650 + 80,
                        y2 = 340 - 40;

                    context.globalAlpha = 1;

                    // left face 2
                    context.beginPath();
                    context.moveTo(x2, y2);
                    context.lineTo(x2 - wx, y2 - wx * 0.5);
                    context.lineTo(x2 - wx, y2 - h - wx * 0.5);
                    context.lineTo(x2, y2 - h * 1);
                    context.closePath();
                    context.fillStyle = '#838357';
                    context.strokeStyle = '#7a7a51';
                    context.stroke();
                    context.fill();

                    // right face 2
                    context.beginPath();
                    context.moveTo(x2, y2);
                    context.lineTo(x2 + wy, y2 - wy * 0.5);
                    context.lineTo(x2 + wy, y2 - h - wy * 0.5);
                    context.lineTo(x2, y2 - h * 1);
                    context.closePath();
                    context.fillStyle = '#6f6f49';
                    context.strokeStyle = '#676744';
                    context.stroke();
                    context.fill();

                    // center face 2
                    context.beginPath();
                    context.moveTo(x2, y2 - h);
                    context.lineTo(x2 - wx, y2 - h - wx * 0.5);
                    context.lineTo(x2 - wx + wy, y2 - h - (wx * 0.5 + wy * 0.5));
                    context.lineTo(x2 + wy, y2 - h - wy * 0.5);
                    context.closePath();
                    context.fillStyle = '#989865';
                    context.strokeStyle = '#8e8e5e';
                    context.stroke();
                    context.fill();
                    context.fillStrokeShape(shape);

                    
                },
                draggable: false,
            },
            p3OuterBox: {
                sceneFunc: function(context, shape) {
                    let x = 650, 
                        y = 350, 
                        wx = 80, 
                        wy = 120, 
                        h = 80;

                    context.globalAlpha = 0.4;

                    // left face
                    context.beginPath();
                    context.moveTo(x, y);
                    context.lineTo(x - wx, y - wx * 0.5);
                    context.lineTo(x - wx, y - h - wx * 0.5);
                    context.lineTo(x, y - h * 1);
                    context.closePath();
                    context.fillStyle = '#838357';
                    context.strokeStyle = '#7a7a51';
                    context.stroke();
                    context.fill();

                    // right face
                    context.beginPath();
                    context.moveTo(x, y);
                    context.lineTo(x + wy, y - wy * 0.5);
                    context.lineTo(x + wy, y - h - wy * 0.5);
                    context.lineTo(x, y - h * 1);
                    context.closePath();
                    context.fillStyle = '#6f6f49';
                    context.strokeStyle = '#676744';
                    context.stroke();
                    context.fill();

                    // center face
                    context.beginPath();
                    context.moveTo(x, y - h);
                    context.lineTo(x - wx, y - h - wx * 0.5);
                    context.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
                    context.lineTo(x + wy, y - h - wy * 0.5);
                    context.closePath();
                    context.fillStyle = '#989865';
                    context.strokeStyle = '#8e8e5e';
                    context.stroke();
                    context.fill();
                    context.fillStrokeShape(shape);
                },
                draggable: false,
            },
            p2Cube: {
                sceneFunc: function(context, shape) {
                    let x = 500, 
                        y = 250, 
                        wx = 100, 
                        wy = 60, 
                        h = 100;
                    
                    // left face
                    context.beginPath();
                    context.moveTo(x, y);
                    context.lineTo(x - wx, y - wx * 0.5);
                    context.lineTo(x - wx, y - h - wx * 0.5);
                    context.lineTo(x, y - h * 1);
                    context.closePath();
                    context.fillStyle = '#838357';
                    context.strokeStyle = '#7a7a51';
                    context.stroke();
                    context.fill();

                    // right face
                    context.beginPath();
                    context.moveTo(x, y);
                    context.lineTo(x + wy, y - wy * 0.5);
                    context.lineTo(x + wy, y - h - wy * 0.5);
                    context.lineTo(x, y - h * 1);
                    context.closePath();
                    context.fillStyle = '#6f6f49';
                    context.strokeStyle = '#676744';
                    context.stroke();
                    context.fill();

                    // center face
                    context.beginPath();
                    context.moveTo(x, y - h);
                    context.lineTo(x - wx, y - h - wx * 0.5);
                    context.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
                    context.lineTo(x + wy, y - h - wy * 0.5);
                    context.closePath();
                    context.fillStyle = '#989865';
                    context.strokeStyle = '#8e8e5e';
                    context.stroke();
                    context.fill();

                    context.fillStrokeShape(shape);
                },
                draggable: false,
            },
            p2Cylinder: {
                sceneFunc: function(context, shape) {
                    let x = 450, 
                        y = -50;

                    context.globalAlpha = 0.8;

                    context.beginPath();
                    context.transform(1,0.5,0,1,0,0);
                    context.arc(x, y, 15, 0, 2 * Math.PI, false);
                    context.transform(1,0,0,1,0,0);
                    context.rotate(45 * Math.PI / 180);
                    context.rect(x - 182, y - 305, 30,100);
                    context.fillStyle = '#6f6f49';
                    context.strokeStyle = '#838357';
                    context.stroke();
                    context.fill();

                    context.fillStrokeShape(shape);
                },
                draggable: false,
            },
            p1Cube: {
                sceneFunc: function(context, shape) {
                    let x = 380, 
                        y = 300, 
                        wx = 100, 
                        wy = 40, 
                        h = 100;
                    

                    // left face
                    context.beginPath();
                    context.moveTo(x, y);
                    context.lineTo(x - wx, y - wx * 0.5);
                    context.lineTo(x - wx, y - h - wx * 0.5);
                    context.lineTo(x, y - h * 1);
                    context.closePath();
                    context.fillStyle = '#838357';
                    context.strokeStyle = '#7a7a51';
                    context.stroke();
                    context.fill();

                    context.beginPath();
                    context.moveTo(x - 10, y - 20);
                    context.lineTo((x + 10) - wx, (y - 10) - wx * 0.5);
                    context.lineTo((x + 10) - wx, (y + 20) - h - wx * 0.5);
                    context.lineTo((x - 10), (y + 10) - h * 1);
                    context.closePath();
                    context.fillStyle = '#6f6f49';
                    context.strokeStyle = '#838357';
                    context.stroke();
                    context.fill();

                    // right face
                    context.beginPath();
                    context.moveTo(x, y);
                    context.lineTo(x + wy, y - wy * 0.5);
                    context.lineTo(x + wy, y - h - wy * 0.5);
                    context.lineTo(x, y - h * 1);
                    context.closePath();
                    context.fillStyle = '#6f6f49';
                    context.strokeStyle = '#676744';
                    context.stroke();
                    context.fill();

                    context.beginPath();
                    context.moveTo((x + 40), (y - 30));
                    context.lineTo((x + 10) + wy, (y - 15) - wy * 0.5);
                    context.lineTo((x + 10) + wy, (y - 5) - h - wy * 0.5);
                    context.lineTo((x + 40), (y - 30) - h * 1);
                    context.closePath();
                    context.fillStyle = '#676744';
                    context.strokeStyle = '#6f6f49';
                    context.stroke();
                    context.fill();

                    // center face
                    context.beginPath();
                    context.moveTo(x, y - h);
                    context.lineTo(x - wx, y - h - wx * 0.5);
                    context.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
                    context.lineTo(x + wy, y - h - wy * 0.5);
                    context.closePath();
                    context.fillStyle = '#989865';
                    context.strokeStyle = '#8e8e5e';
                    context.stroke();
                    context.fill();

                    context.beginPath();
                    context.moveTo((x + 40), (y - h) - 20);
                    context.lineTo((x + 60) - wx, (y - 10) - h - wx * 0.5);
                    context.lineTo((x + 30) - wx + wy, (y + 5) - h - (wx * 0.5 + wy * 0.5));
                    context.lineTo((x + 10) + wy, (y - 5) - h - wy * 0.5);
                    context.closePath();
                    context.fillStyle = '#8e8e5e';
                    context.strokeStyle = '#989865';
                    context.stroke();
                    context.fill();

                    

                    context.fillStrokeShape(shape);
                },
                draggable: false,
            },
            tweens1: [],
            tweens2: [],
            tweens3: [],
            tweens4: [],
        }
    },
    watch: {
        'particle.count': function(newVal, oldVal){
            if (newVal > oldVal){
                let diff = newVal - oldVal
                for (let n = 0; n < diff; n++){
                    this.particles.push({
                        x: (Math.random() * this.width / this.particle.dispersion) +  + this.particle.xOffset,
                        y: (Math.random() * this.height / this.particle.dispersion) +  + this.particle.yOffset,
                        radius: this.particle.radius
                    })
                }
            }
            else {
                let diff = oldVal - newVal
                for (let n = 0; n < diff; n++){
                    this.particles.pop()
                }
            }
        },
        'particle.radius': function(newVal){
            this.particles.forEach(element => {
                element.radius = newVal
            })
        },
        'particle.dispersion': function(newVal){
            this.particles.forEach(element => {
                this.particle.dispersion = newVal
                element.x = (Math.random() * this.width / this.particle.dispersion) + this.particle.xOffset
                element.y = (Math.random() * this.height / this.particle.dispersion) + this.particle.yOffset
            })
        },
        'runSimulation': function(val){
            var message = val ? 'particles running...' : 'particles stopped...';
            console.log(message);
            this.testRun(val);
        },
    },
    methods: {
        createTweens1(){
            let self = this;
            if (!this.tweens1.length == 0) {
                this.tweens1.forEach(tween => {
                    tween.destroy();
                });
                this.tweens1 = [];
                console.log('tweens destroyed...')
            }
            for (let n = 0; n <= this.particle.count - 1; n++){
                let obj = this.$refs["molecules"][n].getNode();
                this.tweens1.push(
                    new Konva.Tween({
                        node: obj,
                        duration: self.duration,
                        // x: Math.floor(Math.random() * 1000) * Math.sin((100 * Math.PI) / 10000) + obj.getX(),
                        // y: Math.floor(Math.random() * 1000) * Math.sin((100 * Math.PI) / 10000) + obj.getY(),
                        x: Math.random() + 360,
                        y: 2 * (Math.random() * 1.5) + 215,
                        opacity: 0,
                        easing: Konva.Easings.EaseInOut,
                        onFinish: function () {
                            if (!self.runSimulation){
                                this.reset();
                            }
                            else{
                                console.log('running tween2');
                                self.tweens2.forEach( tween => {
                                    tween.reset();
                                    tween.play();
                                });
                            }
                        },
                    })
                );
            }
        },
        createTweens2(){
            let self = this;
            if (!this.tweens2.length == 0) {
                this.tweens2.forEach(tween => {
                    tween.destroy();
                });
                this.tweens2 = [];
                console.log('tweens destroyed...')
            }
            for (let n = 0; n <= this.particles2.length - 1; n++){
                let obj = this.$refs["molecules2"][n].getNode();
                this.tweens2.push(
                    new Konva.Tween({
                        node: obj,
                        duration: self.duration,
                        // x: Math.floor(Math.random() * 1000) * Math.sin((100 * Math.PI) / 10000) + obj.getX(),
                        // y: Math.floor(Math.random() * 1000) * Math.sin((100 * Math.PI) / 10000) + obj.getY(),
                        x: 2 * (Math.random() * 6) + 450,
                        y: 2 * (Math.random() * 6) + 170,
                        opacity: 0,
                        scaleX: 0.9,
                        scaleY: 0.9,
                        fill: '#adee2e',
                        shadowColor: '#6f6f49',
                        shadowBlur: 2,
                        easing: Konva.Easings.EaseInOut,
                        onFinish: function () {
                            console.log('running tween3');
                            self.tweens3.forEach( tween => {
                                tween.reset();
                                tween.play();
                            });
                        },
                    }),
                );
            }
        },
        createTweens3(){
            
            if (!this.tweens3.length == 0) {
                this.tweens3.forEach(tween => {
                    tween.destroy();
                });
                this.tweens3 = [];
                console.log('tweens destroyed...')
            }
            for (let n = 0; n <= this.particles3.length - 1; n++){
                let obj = this.$refs["molecules3"][n].getNode();
                this.tweens3.push(
                    new Konva.Tween({
                        node: obj,
                        duration: self.duration,
                        // x: Math.floor(Math.random() * 1000) * Math.sin((100 * Math.PI) / 10000) + obj.getX(),
                        // y: Math.floor(Math.random() * 1000) * Math.sin((100 * Math.PI) / 10000) + obj.getY(),
                        x: (Math.random() * 50) + 660,
                        y: 2 * (Math.random() * 40) + 220,
                        opacity: 1,
                        scaleX: 0.8,
                        scaleY: 0.8,
                        fill: '#adee2e',
                        shadowColor: '#6f6f49',
                        shadowBlur: 4,
                        easing: Konva.Easings.EaseInOut,
                        onFinish: function () {
                            console.log('running tween4');
                            self.tweens4.forEach( tween => {
                                tween.reset();
                                tween.play();
                            });
                        },
                    }),
                );
            }
        },
        createTweens4(){
            
            if (!this.tweens4.length == 0) {
                this.tweens4.forEach(tween => {
                    tween.destroy();
                });
                this.tweens4 = [];
                console.log('tweens destroyed...')
            }
            for (let n = 0; n <= this.particles4.length - 1; n++){
                let obj = this.$refs["molecules4"][n].getNode();
                this.tweens4.push(
                    new Konva.Tween({
                        node: obj,
                        duration: self.duration,
                        // x: Math.floor(Math.random() * 1000) * Math.sin((100 * Math.PI) / 10000) + obj.getX(),
                        // y: Math.floor(Math.random() * 1000) * Math.sin((100 * Math.PI) / 10000) + obj.getY(),
                        x: (Math.random() * 50) + 660,
                        y: 2 * (Math.random() * 40) + 220,
                        opacity: 1,
                        scaleX: 0.8,
                        scaleY: 0.8,
                        fill: 'red',
                        shadowColor: '#6f6f49',
                        shadowBlur: 4,
                        easing: Konva.Easings.EaseInOut,
                        onFinish: function () {
                            console.log('running tween1');
                            self.tweens1.forEach( tween => {
                                tween.reset();
                                tween.play();
                            });
                        },
                    }),
                );
            }
        },
        testRun(state){
            if (state){
                // this.createTweens1();
                // this.createTweens2();
                // this.createTweens3();
                // this.createTweens4();
                // this.tweens1.forEach( tween => {
                //     tween.reset();
                //     tween.play();
                // });
            } else {
                // this.tweens1.forEach( tween => {
                //     tween.finish();
                // });
                // this.tweens2.forEach( tween => {
                //     tween.finish();
                // });
                // this.tweens3.forEach( tween => {
                //     tween.finish();
                // });
                // this.tweens4.forEach( tween => {
                //     tween.finish();
                // });
            }
        },
        runMotionPath(){
            // const thisRegulator = this.$refs.regulator.getNode();
            // const thisPath = this.$refs.path.getNode();
            // gsap.to(thisRegulator, {
            //     duration: 5, 
            //     repeat: 12,
            //     repeatDelay: 3,
            //     yoyo: false,
            //     ease: "power1.inOut",
            //     motionPath:{
            //         path: thisPath,
            //         align: thisPath,
            //         autoRotate: true,
            //         alignOrigin: [0.5, 0.5]
            //     }
            // });
        }
    },
    created(){
        
    },
    mounted(){
        for (let n = 0; n < this.particle.count; n++){
            this.particles.push({
                x: (Math.random() * this.width / 8) + this.particle.xOffset,
                y: (Math.random() * this.height / 8) + this.particle.yOffset,
                radius: this.particle.radius
            });

            
        }

        for (let n = 0; n < (this.particle.count * 2); n++){

            this.particles2.push({
                x: (Math.random() * 20) + 400,
                y: 2 * (Math.random() * 15) + 180,
                radius: Math.floor(this.particle.radius / 2)
            });

        }

        for (let n = 0; n < (this.particle.count * 4); n++){
            this.particles3.push({
                x: (Math.random() * 20) + 660,
                y: 2 * (Math.random() * 10) + 200,
                radius: Math.floor(this.particle.radius / 4),
                // opacity: 1,
            });
        }

        for (let n = 0; n < (this.particle.count * 4); n++){
            this.particles4.push({
                x: (Math.random() * 50) + 660,
                y: 2 * (Math.random() * 40) + 220,
                radius: Math.floor(this.particle.radius / 4),
                opacity: 1,
            });
        }

        // this.runMotionPath();
    }
}
</script>