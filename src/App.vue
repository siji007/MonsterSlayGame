<template>
  <div id="app">
   
    <div class="container">
    <h1 class=" text-center mt-12 mb-16" style="font-family:cursive;font-size:50px;">Monster Slayer Game</h1>
    <div class="d-flex justify-around">
        <div class="items-stretch">
            <h1 class="text-center" style="font-family: cursive;">YOU</h1>
            <div class="healthbar">
                <div class="healthbar  text-center text-3xl mt-3 " style="background-color: green; margin: 0; color: white;"
                :style="{width: playerHealth + '%'}">
               
                {{ playerHealth }}

                </div>
            </div>
        </div>
        <div class="items-stretch">
            <h1 class="text-center " style="font-family:cursive">MONSTER</h1>
            <div class="healthbar">
                <div class="healthbar text-center text-3xl mt-3 text-white"
                 style="background-color: green; margin: 0; color: white;"
                 :style="{width: monsterHealth + '%'}">
                {{monsterHealth}}

                </div>
            </div>
        </div>
    </div>
    <section class="row controls p-5" v-if="!gameIsRunning">
        <div class="small-12 columns">
            <button id="start-game" @click="startGame" class="p-3 text-bold">START NEW GAME</button>
        </div>
    </section>

    <section class="row controls p-4"  v-else-if="gameIsRunning">

        <div  class="small-12 columns p-4">
            <button class="appearance-none p-3 rounded-lg text-2xl" @click="attack" id="attack">ATTACK</button>
            <button class="appearance-none p-3 ml-4 rounded text-2xl"  @click="specialAttack" id="special-attack">SPECIAL ATTACK</button>
            <button class="appearance-none p-3  ml-4 text-2xl sm:mt-10"  @click="heal" id="heal">HEAL</button>
            <button class="appearance-none p-3 rounded-lb  ml-4 text-2xl"  @click="giveUp" id="give-up">GIVE UP</button>
        </div>
    </section>

    <section class="row log p-3 " v-if="turns.length > 0" :style="{ 'marginBottom':  marginBottom+'px' }">
        <div class="small-12 columns p-5" >
            <ul>
                <li :key="turn" v-for="turn in turns"
                class="text-xl p-3 mb-3"
                :class="{ 'player-turn': turn.isPlayer, 'monster-turn': !turn.isPlayer }"
                >
                {{ turn.text }}
                </li>
            </ul>
        </div>
    </section>
  </div>
  </div>
</template>



<script>
    export default{
       name: 'App',
       data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            marginBottom: 100,
            gameIsRunning: false,
            show: false,
            turns: []
        }
    },

    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.monsterHealth = 100,
            this.playerHealth = 100
            this.turns = [];

        },
        attack: function() {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                'isPlayer': true,
                text: "Player hits Monster with a damage" + damage
            });
            if (this.checkWin()) { //so if the code is true we don't want to check for the damage below again,we instead start a new game 
                return;
            }
            this.monsterAttacks();
            //here we only check for checkWin() because there is no code executing after this function!
        },
        specialAttack: function() {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                'isPlayer': true,
                text: "Player hits Monster Hard with a damage" + damage
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();

        },
        heal: function() {
            // if (this.playerHealth >= 100) {
            //     this.playerHealth = 100
            // } //try later
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            var heal = 10;
            this.turns.unshift({

                'isPlayer': true,
                text: "Player heals" + heal
            });
            this.monsterAttacks(); //here if you try to cheat by healing upwhen your health is above 90 monster will reduce your life

        },


        giveUp: function() {
            this.startGame();
            this.gameIsRunning = false;
            
        },


        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },

        monsterAttacks: function() {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                'isPlayer': false,
                text: "Monster hits Player with a damage" + damage
            });
            this.checkWin();
        },

        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }

                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You Lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
            }
        }
        }
    }
</script>


<style scoped lang = "css">
@import "./css/app.css";
@import "./css/foundation.min.css";
@import "./css/Tailwind/dist/style.css";


</style>

