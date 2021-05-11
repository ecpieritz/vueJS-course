<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr />
    <!-- 
    <b-button variant="primary" class="mb-4" @click="display = !display"
      >Show Message</b-button
    >
		<transition name="fade">
			<b-alert variant='info' show v-if="display">{{msg}}</b-alert>
		</transition>

		<transition name="slide">
			<b-alert variant='info' show v-show="display">{{msg}}</b-alert>
		</transition>

		<transition 
		enter-active-class="animated bounce" 
		leave-active-class="animated shake">
			<b-alert variant='info' show v-show="display">{{msg}}</b-alert>
		</transition> 
    
    <hr />

    <b-select v-model="animationType" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

    <transition :name="animationType" mode="out-in">
      <b-alert variant="info" show v-if="display" key="info">{{ msg }}</b-alert>
      <b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
    </transition>

    <hr />
    <button @click="display2 = !display2">Change</button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="display2" class="box"></div>
    </transition>

    <hr />
    <div class="mb-4">
      <b-button
        variant="primary"
        @click="selectedComponent = 'InfoAlert'"
        class="mr-4" 
        >Info</b-button
      >
      <b-button variant="warning" @click="selectedComponent = 'WarningAlert'"
        >Warning</b-button
      >
    </div>
    <transition name="fade" mode="out-in">
      <component :is="selectedComponent"></component>
    </transition> -->

    <b-button variant="primary" @click="addStudent" class="mb-4">Add</b-button>

    <transition-group name='slide'>
      <b-list-group v-for="(student, i) in students" :key="student">
        <b-list-group-item @click="removeStudent(i)" class="text-dark mb-3">{{
          student
        }}</b-list-group-item>
      </b-list-group>
    </transition-group>
  </div>
</template>

<script>
import WarningAlert from "./WarningAlert";
import InfoAlert from "./InfoAlert";

export default {
  components: { WarningAlert, InfoAlert },
  data() {
    return {
      students: ["Elsa", "Ana", "Kristof", "Olaf", "Sven"],
      msg: "An information message for the user!",
      display: false,
      display2: true,
      animationType: "fade",
      baseWidth: 0,
      selectedComponent: "InfoAlert",
    };
  },
  methods: {
    addStudent() {
      const s = Math.random().toString(36).substring(2);
      this.students.push(s);
    },
    removeStudent(index) {
      this.students.splice(index, 1);
    },
    animate(el, done, negative) {
      let round = 1;
      const timer = setInterval(() => {
        const newWidth = this.baseWidth + (negative ? -round * 10 : round * 10);
        el.style.width = `${newWidth}px`;
        round++;
        if (round > 30) {
          clearInterval(timer);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      this.baseWidth = 0;
      el.style.width = `${this.baseWidth}px`;
    },
    enter(el, done) {
      this.animate(el, done, false);
    },
    // afterEnter(el) {
    //   console.log("afterEnter");
    // },
    // enterCancelled(el) {
    //   console.log("enterCancelled");
    // },
    beforeLeave(el) {
      this.baseWidth = 300;
      el.style.width = `${this.baseWidth}px`;
    },
    leave(el, done) {
      this.animate(el, done, true);
    },
    // afterLeave(el) {
    //   console.log("afterLeave");
    // },
    // leaveCancelled(el) {
    //   console.log("leaveCancelled");
    // },
  },
};
</script>

<style>
body {
  background-color: #2e2e2e;
}
h1 {
  color: #0083fd;
  font-weight: 900;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color: #fff;
  font-size: 1.5rem;
}

.box {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: #859de0;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  position: absolute;
  width: 96%;
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-move{
  transition: transform 1s;
}
</style>
