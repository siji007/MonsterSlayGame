// new Vue({
//     el: '#app',
//     data() {
//         return {
//             playerHealth: 100,
//             monsterHealth: 100,
//             gameIsRunning: false,
//             show: false,
//             turns: []
//         }
//     },

//     methods: {
//         startGame: function() {
//             this.gameIsRunning = true;
//             this.monsterHealth = 100,
//                 this.playerHealth = 100
//             this.turns = [];

//         },
//         attack: function() {
//             var damage = this.calculateDamage(3, 10);
//             this.monsterHealth -= damage;
//             this.turns.unshift({
//                 'isPlayer': true,
//                 text: "Player hits Monster with a damage" + damage
//             });
//             if (this.checkWin()) { //so if the code is true we don't want to check for the damage below again,we instead start a new game 
//                 return;
//             }
//             this.monsterAttacks();
//             //here we only check for checkWin() because there is no code executing after this function!
//         },
//         specialAttack: function() {
//             var damage = this.calculateDamage(10, 20);
//             this.monsterHealth -= damage;
//             this.turns.unshift({
//                 'isPlayer': true,
//                 text: "Player hits Monster Hard with a damage" + damage
//             });
//             if (this.checkWin()) {
//                 return;
//             }
//             this.monsterAttacks();

//         },
//         heal: function() {
//             // if (this.playerHealth >= 100) {
//             //     this.playerHealth = 100
//             // } //try later
//             if (this.playerHealth <= 90) {
//                 this.playerHealth += 10;
//             } else {
//                 this.playerHealth = 100;
//             }
//             var heal = 10;
//             this.turns.unshift({

//                 'isPlayer': true,
//                 text: "Player heals" + heal
//             });
//             this.monsterAttacks(); //here if you try to cheat by healing upwhen your health is above 90 monster will reduce your life

//         },


//         giveUp: function() {
//             this.gameIsRunning = false;
//         },


//         calculateDamage: function(min, max) {
//             return Math.max(Math.floor(Math.random() * max) + 1, min);
//         },

//         monsterAttacks: function() {
//             var damage = this.calculateDamage(5, 12);
//             this.playerHealth -= damage;
//             this.turns.unshift({
//                 'isPlayer': false,
//                 text: "Monster hits Player with a damage" + damage
//             });
//             this.checkWin();
//         },

//         checkWin: function() {
//             if (this.monsterHealth <= 0) {
//                 if (confirm('You won! New Game?')) {
//                     this.startGame();
//                 } else {
//                     this.gameIsRunning = false;
//                 }

//                 return true;
//             } else if (this.playerHealth <= 0) {
//                 if (confirm('You Lost! New Game?')) {
//                     this.startGame();
//                 } else {
//                     this.gameIsRunning = false;
//                 }
//             }

//         }
//     }
// })