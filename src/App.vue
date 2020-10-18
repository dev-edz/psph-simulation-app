<template>
  <v-app>
    <v-app-bar
      dense
      app
      color="green"
      dark
    >
      <div class="d-flex align-center">
        <strong>PSPH - Electrolysis Simulator Web App</strong>
      </div>
      
    </v-app-bar>

    <v-main>
      <!-- <div class="watermark">
        <pre>  </pre>
        <pre> PSPH2020  PSPH2020  PSPH2020 </pre>
        <pre> PSPH2020  PSPH2020  PSPH2020 </pre>
      </div> -->

      <!-- App Settings -->
      <v-navigation-drawer
        class="pa-1 transparent"
        width="350px"
        height="auto"
        v-model="appSettings.visible"
        outline
        absolute
        floating
        right
      >
        <v-card class="ma-2 pa-1">
          <div class="primary title white--text text-center">App Settings</div>

          <!-- <v-divider></v-divider> -->
          
          <v-expansion-panels
            class="pa-1"
            hover
            focusable
            multiple
          >
            <v-expansion-panel class="pa-1">
              <v-expansion-panel-header>{{ settings.particle.label }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                
                <!-- Particle Count -->
                <v-row dense style="height: 50px;">
                  <v-col cols="3">
                    <v-subheader class="pl-0">Count</v-subheader>
                  </v-col>
                  <v-col>
                    <v-slider
                      class="mt-2 ml-2"
                      v-model="settings.particle.count"
                      dense
                      min="4"
                      max="15"
                      hide-details
                      :thumb-size="20"
                    >
                      
                    </v-slider>
                  </v-col>
                  <v-col cols="2">
                    <div class="mt-3 caption text-center">{{ settings.particle.count }}</div>
                  </v-col>
                </v-row>

                <!-- Particle Radius -->
                <v-row dense style="height: 50px;">
                  <v-col cols="3">
                    <v-subheader class="pl-0">Radius</v-subheader>
                  </v-col>
                  <v-col>
                    <v-slider
                      class="mt-2 ml-2"
                      v-model="settings.particle.radius"
                      dense
                      min="8"
                      max="12"
                      hide-details
                      :thumb-size="20"
                    >
                      
                    </v-slider>
                  </v-col>
                  <v-col cols="2">
                    <div class="mt-3 caption text-center">{{ settings.particle.radius }}</div>
                  </v-col>
                </v-row>

                <!-- Particle Dispersion -->
                <v-row dense style="height: 50px;">
                  <v-col cols="3">
                    <v-subheader class="pl-0">Dispersion</v-subheader>
                  </v-col>
                  <v-col>
                    <v-slider
                      class="mt-2 ml-2"
                      v-model="settings.particle.dispersion"
                      dense
                      min="2"
                      max="20"
                      hide-details
                      :thumb-size="20"
                    >
                      
                    </v-slider>
                  </v-col>
                  <v-col cols="2">
                    <div class="mt-3 caption text-center">{{ settings.particle.dispersion }}</div>
                  </v-col>
                </v-row>

              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel class="pa-1">
              <v-expansion-panel-header>{{ settings.particleSimulation.label }}</v-expansion-panel-header>
              <v-expansion-panel-content>

                <!-- Simulation Speed -->
                <v-row dense style="height: 50px;">
                  <v-col cols="3">
                    <v-subheader class="pl-0">Speed</v-subheader>
                  </v-col>
                  <v-col>
                    <v-slider
                      class="mt-2 ml-2"
                      v-model="settings.particleSimulation.duration"
                      dense
                      min="1"
                      max="10"
                      hide-details
                      :thumb-size="20"
                    >
                      
                    </v-slider>
                  </v-col>
                  <v-col cols="2">
                    <div class="mt-3 caption text-center">{{ settings.particleSimulation.duration }}</div>
                  </v-col>
                </v-row>

              </v-expansion-panel-content>
            </v-expansion-panel>

          </v-expansion-panels>

        </v-card>
      </v-navigation-drawer>

      <!-- Input Settings -->
      <v-navigation-drawer
        class="pa-1 transparent"
        width="350px"
        height="auto"
        v-model="inputSettings.visible"
        outline
        absolute
        floating
        right
      >
        <v-card class="ma-2 pa-1">
          <div class="primary title white--text text-center">{{ settings.input.label }}</div>
          
          <div class="pa-2">

            <!-- PM2.5 -->
            <v-row dense style="height: 50px;">
              <v-col cols="3">
                <v-subheader class="pl-0">PM2.5</v-subheader>
              </v-col>
              <v-col>
                <v-slider
                  class="mt-2 ml-2"
                  v-model="settings.input.pm25"
                  dense
                  min="1"
                  max="100"
                  hide-details
                  :thumb-size="20"
                >
                  
                </v-slider>
              </v-col>
              <v-col cols="2">
                <div class="mt-3 caption text-center">{{ settings.input.pm25 }}</div>
              </v-col>
            </v-row>

            <!-- PM10 -->
            <v-row dense style="height: 50px;">
              <v-col cols="3">
                <v-subheader class="pl-0">PM10</v-subheader>
              </v-col>
              <v-col>
                <v-slider
                  class="mt-2 ml-2"
                  v-model="settings.input.pm10"
                  dense
                  min="1"
                  max="100"
                  hide-details
                  :thumb-size="20"
                >
                  
                </v-slider>
              </v-col>
              <v-col cols="2">
                <div class="mt-3 caption text-center">{{ settings.input.pm10 }}</div>
              </v-col>
            </v-row>

            <!-- Humidity -->
            <v-row dense style="height: 50px;">
              <v-col cols="3">
                <v-subheader class="pl-0">Humidity</v-subheader>
              </v-col>
              <v-col>
                <v-slider
                  class="mt-2 ml-2"
                  v-model="settings.input.humidity"
                  dense
                  min="1"
                  max="100"
                  hide-details
                  :thumb-size="20"
                >
                  
                </v-slider>
              </v-col>
              <v-col cols="2">
                <div class="mt-3 caption text-center">{{ settings.input.humidity }}</div>
              </v-col>
            </v-row>

            <!-- CO2 -->
            <v-row dense style="height: 50px;">
              <v-col cols="3">
                <v-subheader class="pl-0">CO2</v-subheader>
              </v-col>
              <v-col>
                <v-slider
                  class="mt-2 ml-2"
                  v-model="settings.input.co2"
                  dense
                  min="1"
                  max="100"
                  hide-details
                  :thumb-size="20"
                >
                  
                </v-slider>
              </v-col>
              <v-col cols="2">
                <div class="mt-3 caption text-center">{{ settings.input.co2 }}</div>
              </v-col>
            </v-row>
          </div>

        </v-card>
      </v-navigation-drawer>

      <!-- Table -->
      <v-navigation-drawer
        class="pa-1 transparent"
        width="700px"
        height="auto"
        v-model="tableSettings.visible"
        outline
        absolute
        floating
        right
      >
        <v-card class="ma-2 pa-1">
          <div class="primary title white--text text-center">Data Table</div>
          <v-container>
            <v-responsive class="overflow-y-auto" height="calc(80vh - 20px)">
              <v-data-table 
                class="ma-1"
                fixed-header
                :headers="tableSettings.headers" 
                :items="tableSettings.items"
                :options="tableSettings.options" 
                item-key="logID" 
                dense 
              ></v-data-table>
            </v-responsive>
          </v-container>
        </v-card>
      </v-navigation-drawer>

      <div id="floating-action-bar">
        <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                style="top: 30px; left: 30px;"
                v-bind="attrs"
                v-on="on"
                color="blue"
                dark
                absolute
                fab
                @click.stop="simulationControl = false; appSettings.visible = !appSettings.visible; fab = !fab; tableSettings.visible = false; inputSettings.visible = false;"
              >
                <v-icon v-if="appSettings.visible">mdi-close</v-icon>
                <v-icon v-else>mdi-application-cog</v-icon>
              </v-btn>

            </template>
            <span v-if="!appSettings.visible">App Settings</span>
            <span v-else>Close</span>
        </v-tooltip>

        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              style="top: 100px; left: 30px;"
              v-bind="attrs"
              v-on="on"
              color="blue"
              dark
              absolute
              fab
              @click.stop="simulationControl = false; inputSettings.visible = !inputSettings.visible;  tableSettings.visible = false; fab = !fab; appSettings.visible = false;"
            >
              <v-icon v-if="inputSettings.visible">mdi-close</v-icon>
              <v-icon v-else>mdi-tune</v-icon>
            </v-btn>

          </template>
          <span v-if="!inputSettings.visible">Input Settings</span>
          <span v-else>Close</span>
        </v-tooltip>

        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              style="top: 170px; left: 30px;"
              v-bind="attrs"
              v-on="on"
              color="blue"
              dark
              absolute
              fab
              @click.stop="tableSettings.visible = !tableSettings.visible; appSettings.visible = false; inputSettings.visible = false;"
            >
              <v-icon v-if="tableSettings.visible">mdi-close</v-icon>
              <v-icon v-else>mdi-table</v-icon>
            </v-btn>

          </template>
          <span v-if="!tableSettings.visible">Data Table</span>
          <span v-else>Close</span>
        </v-tooltip>

        <v-speed-dial
          v-model="downloadSettings.visible"
          :top="true"
          :bottom="false"
          :right="false"
          :left="true"
          direction="bottom"
          :open-on-hover="false"
          transition="scale-transition"
          style="top: 205px; left: 20px;"
        >
          <template v-slot:activator>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-model="downloadSettings.visible"
                  style="top: 35px; left: 10px;"
                  v-bind="attrs"
                  v-on="on"
                  color="blue"
                  dark
                  fab
                  @click="simulationControl = false; appSettings.visible = false; tableSettings.visible = false;"
                >
                  <v-icon v-if="downloadSettings.visible">mdi-close</v-icon>
                  <v-icon v-else>mdi-download</v-icon>
                </v-btn>
              </template>
              <span>Download Data</span>
            </v-tooltip>
          </template>

          <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  style="top: 25px; left: 10px;"
                  v-bind="attrs"
                  v-on="on"
                  fab
                  dark
                  small
                  color="green"
                >
                  <download-excel 
                    :data="tableSettings.items"
                    worksheet="simulated-data"
                    type="csv"
                    :name="tableSettings.downloadName">
                    <v-icon>mdi-file-delimited-outline</v-icon>
                  </download-excel>
                </v-btn>
              </template>
              <span>Download as CSV File</span>
          </v-tooltip>

          <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  style="top: 25px; left: 10px;"
                  v-bind="attrs"
                  v-on="on"
                  fab
                  dark
                  small
                  color="indigo"
                >
                  <download-excel 
                    :data="tableSettings.items"
                    worksheet="simulated-data"
                    :name="tableSettings.downloadName">
                    
                    <v-icon>mdi-file-excel-outline</v-icon>
                  </download-excel>
                </v-btn>
                
              </template>
              <span>Download as Excel File</span>
          </v-tooltip>
        </v-speed-dial>
      </div>
      <!-- Simulation -->
      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            style="bottom: 20px; left: 30px;"
            v-bind="attrs"
            v-on="on"
            color="success"
            dark
            absolute
            fab
            @click.stop="simulationControl =! simulationControl; appSettings.visible = false; inputSettings.visible = false;"
          >
            <v-icon v-if="simulationControl">mdi-stop</v-icon>
            <v-icon v-else>mdi-play</v-icon>
          </v-btn>

        </template>
        <span v-if="simulationControl">Stop Simulation</span>
        <span v-else>Start Simulation</span>
      </v-tooltip>

      <v-container id="mainContent" class="px-0">
        
        
        <SimulatorCanvas 
          :height="650" 
          :width="appSettings.width" 
          :particle="settings.particle" 
          :runSimulation="simulationControl"
          :duration="settings.particleSimulation.duration"/>

        <v-container fluid
          style="position: absolute; bottom: 0px;">
          <v-row fluid class="mx-1 transparent">
            <v-col v-for="(item, index) in simulationParameters" :key="index">
              <v-card class="pa-1 transparent">
                <div style="background-color: rgba(76, 175, 80, 0.9);" class="subheader white--text text-center"><strong>{{ item.phase }}</strong></div>
                <v-container 
                      class="pt-4 pb-1">
                    <v-row dense v-for="(parameter, i) in item.parameters" 
                      :key="i"
                      style="height:50px;">
                      <v-col cols="6">
                        <v-subheader class="pl-0">{{ parameter.label }}</v-subheader>
                      </v-col>
                      <v-col cols="6">
                        <div class="mt-3 caption text-center"><strong>{{ parameter.val + ' ' + parameter.unit }}</strong></div>
                      </v-col>
                    </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        
      </v-container>
      
    </v-main>

    <v-footer
      dark
      padless
    >
      <v-card
        color="teal"
        class="flex"
        flat
        tile
      >
        <v-card-text class="py-0 white--text text-center">
          <strong class=" text-center">PSPH</strong> {{ new Date().getFullYear() }} 
          <v-btn
            v-for="(link, index) in links"
            :key="index"
            :href="link.link"
            :target="link.target"
            class="mx-2 mt-n1"
            dark
            icon
          >
            <v-icon size="18px">{{ link.icon }}</v-icon>
          </v-btn>

        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// const width = window.innerWidth;
// const height = 300;

import SimulatorCanvas from './components/SimulatorCanvas';
export default {
  name: 'App',

  components: {
    // HelloWorld,
    SimulatorCanvas
  },

  data(){
    return {
      fab: false,
      appSettings: {
        visible: false,
        width: window.innerWidth,
      },
      inputSettings: {
        visible: false,
      },
      tableSettings: {
        visible: false,
        headers: [
          {
            text: 'Trial No.',
            align: 'center',
            sortable: false,
            value: 'logID'
          },
          {
            text: 'CO2 content before capture (ppm)',
            align: 'center',
            sortable: false,
            value: 'CO2Before'
          },
          {
            text: 'Humidity Ratio before Humidification',
            align: 'center',
            sortable: false,
            value: 'humidityBefore'
          },
          {
            text: 'CO2 content after capture (ppm)',
            align: 'center',
            sortable: false,
            value: 'CO2After'
          },
          {
            text: 'Humidity Ratio after Humidification',
            align: 'center',
            sortable: false,
            value: 'humidityAfter'
          },
          {
            text: 'Power Output (Ah)',
            align: 'center',
            sortable: false,
            value: 'powerOutput'
          }
        ],
        items: [],
        options: {
          itemsPerPage: -1,
        },
        downloadName: '',
      },
      downloadSettings: {
        visible: false,
      },
      simulationControl: false,
      simulationInterval: '',
      settings: {
        particle: {
          label: 'Particle/s',
          count: 6,
          radius: 8,
          xOffset: 150,
          yOffset: 250,
          dispersion: 5,
        },
        particleSimulation: {
          label: 'Particle Simulation',
          duration: 2,
        },
        input: {
          label: 'Input Settings',
          pm25: 5,
          pm10: 6,
          humidity: 7,
          co2: 8
        }
      },
      links: [
        {icon: 'mdi-facebook', target: '_blank', link: 'https://web.facebook.com/ProtoSolutionsPH'},
        {icon: 'mdi-twitter', target: '', link: '#'},
        {icon: 'mdi-github', target: '', link: '#'},
        {icon: 'mdi-instagram', target: '', link: '#'},
      ],
      simulationParameters: [
        {
          phase: 'PHASE 1',
          parameters: [
            {label: 'PM2.5', val: 0, unit: 'PPM'},
            {label: 'PM10', val: 0, unit: 'PPM'},
            {label: 'Humidity', val: 0, unit: '%'},
            {label: 'CO2', val: 0, unit: 'g'},
          ],
        },
        {
          phase: 'PHASE 2',
          parameters: [
            {label: 'PM2.5', val: 0, unit: 'PPM'},
            {label: 'PM10', val: 0, unit: 'PPM'},
            {label: 'Humidity', val: 0, unit: '%'},
            {label: 'CO2', val: 0, unit: 'g'},
          ],
        },
        {
          phase: 'PHASE 3',
          parameters: [
            {label: 'PM2.5', val: 0, unit: 'PPM'},
            {label: 'PM10', val: 0, unit: 'PPM'},
            {label: 'Humidity', val: 0, unit: '%'},
            {label: 'CO2', val: 0, unit: 'g'},
          ],
        },
        {
          phase: 'OUTPUT',
          parameters: [
            {label: 'Q (Charge)', val: 0, unit: 'Ah'},
          ],
        },

      ],
    }
  },

  methods: {
    testRun(){
      let self = this; 
      let i = 0, charge;
      let p1pm25 = self.settings.input.pm25, p2pm25, p3pm25; 
      let p1pm10 = self.settings.input.pm10, p2pm10, p3pm10;
      let p1humid = self.settings.input.humidity, p2humid, p3humid;
      let p1co2 = self.settings.input.co2, p2co2, p3co2;

      this.simulationInterval = setInterval(function(){

        let signGenerator1 = (Math.round(Math.random()) * 2) - 1;

        p1pm25 *= (1 + (signGenerator1 * 0.01));
        p2pm25 = p1pm25 * 0.03;
        p3pm25 = p2pm25;

        self.simulationParameters[0].parameters[0].val = p1pm25.toFixed(4);
        self.simulationParameters[1].parameters[0].val = p2pm25.toFixed(4);
        self.simulationParameters[2].parameters[0].val = p3pm25.toFixed(4);

        p1pm10 *= (1 + (signGenerator1 * 0.01));
        p2pm10 = p1pm10 * 0.03;
        p3pm10 = p2pm10;

        self.simulationParameters[0].parameters[1].val = p1pm10.toFixed(4);
        self.simulationParameters[1].parameters[1].val = p2pm10.toFixed(4);
        self.simulationParameters[2].parameters[1].val = p3pm10.toFixed(4);

        p1humid *= (1 + (signGenerator1 * 0.01));
        p2humid = p1humid;
        p3humid = p2humid * 1.3;

        self.simulationParameters[0].parameters[2].val = p1humid.toFixed(4);
        self.simulationParameters[1].parameters[2].val = p2humid.toFixed(4);
        self.simulationParameters[2].parameters[2].val = p3humid.toFixed(4);
        
        p1co2 *= (1 + (signGenerator1 * 0.01));
        p2co2 = p1co2;
        p3co2 = p2co2 * 1.3;

        self.simulationParameters[0].parameters[3].val = p1co2.toFixed(4);
        self.simulationParameters[1].parameters[3].val = p2co2.toFixed(4);
        self.simulationParameters[2].parameters[3].val = p3co2.toFixed(4);

        charge = (p3co2 * (0.1595016));

        self.simulationParameters[3].parameters[0].val = charge.toFixed(4);

        self.tableSettings.items.push({
          logID: i,
          CO2Before: p1co2,
          CO2After: p3co2,
          humidityBefore: p1humid,
          humidityAfter: p3humid,
          powerOutput: charge
        });

        console.log(
          JSON.stringify({
            'pm25' : {
              'p1' : p1pm25.toFixed(2),
              'p2' : p2pm25.toFixed(2),
              'p3' : p3pm25.toFixed(2),
            },
            'pm10' : {
              'p1' : p1pm10.toFixed(2),
              'p2' : p2pm10.toFixed(2),
              'p3' : p3pm10.toFixed(2),
            },
            'humid' : {
              'p1' : p1humid.toFixed(2),
              'p2' : p2humid.toFixed(2),
              'p3' : p3humid.toFixed(2),
            },
            'co2' : {
              'p1' : p1co2.toFixed(2),
              'p2' : p2co2.toFixed(2),
              'p3' : p3co2.toFixed(2),
            },
            'charge' : charge,
          })
        );

      i++;
      }, 1000);
    },
  },
  watch: {
    simulationControl: function(newVal){
      if (newVal === true){
        this.tableSettings.items = [];
        this.testRun();
      }
      else {
        clearInterval(this.simulationInterval);
        this.tableSettings.downloadName = 'esimul_' + String(new Date().getTime()) + '.xls';
      }
    },
  },
  mounted() {
  }
};
</script>

<style>
  html {
    overflow: hidden;
  }

  #mainContent {
    position: relative;
  }

  #floating-action-bar .v-speed-dial {
    position: absolute;
    left: 20px;
  }

  #floating-action-bar .v-btn--floating {
    position: relative;
    background-color: red;
  }

  .watermark {
    position: fixed;
    opacity:0.1;
    z-index:99;
    font-size: 120px;
    color:black;
    pointer-events: none;
    width: 100%;
    height: 100%;

  }
</style>