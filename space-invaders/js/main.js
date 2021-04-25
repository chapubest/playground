"use strict";

var game = {
	map: {
		size: {width:null, height:null},
		grid: {w_num:228, h_num:288, width:null},
		spaceship: {y_life:272,y_paly:245},
		ufo:{y:30},
		wall:{y:215},
		alien:{num:9, y_aline1: 70, timging: 20, direction: 'right', move_timing: 35, move_length:3, move_max_timing:35}
	},
	ctx: null,
	body: null,
	color: {
		green:'#1fff1d',
		white: '#ffffff',
		red: '#ff1d22'
	},
	timer: null,
	time: null,
	font: '25px pixel',
	score: null,
	life: null,
	audios: {
		launch: null,
		bomb: null,
		ufo: null
	},
	// 敌人子弹
	enemy_bullet: {
		coordinates: [],
		mark:'b',
		length: 5,
		speed: 1
	},
	// 玩家子弹
	player_bullet: {
		coordinates: [],
		mark:'b',
		speed: 5,
		length: 4
	},
	// 地
	road: {
		coordinates: [{x:4, y:270}],
		width:220,
		height:1,
		mark:'r'
	},
	// 玩家飞船
	spaceship: {
		coordinates: [],
		mark:'s',
		max_speed: 5,
		data: [[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]
	},
	// 爆炸图1
	bomb1: {
		coordinates: [],
		mark: 'o',
		data: [[1,0,0,0,1,0,0,1],[0,0,1,0,0,0,1,0],[0,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,0],[0,1,1,0,0,1,0,0],[0,0,1,0,0,1,0,0],[0,0,0,1,0,0,0,1],[1,0,0,0,0,0,0,0]]
	},
	// 爆炸图2
	bomb2: {
		coordinates: [],
		mark: 'o',
		data: [[0,0,0,0,1,0,0,0,1,0,0,0,0],[0,1,0,0,0,1,0,1,0,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,1,0,0],[0,0,0,1,0,0,0,0,0,1,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,1,1],[0,0,0,1,0,0,0,0,0,1,0,0,0],[0,0,1,0,0,1,0,1,0,0,1,0,0],[0,1,0,0,1,0,0,0,1,0,0,1,0]]
	},
	// 爆炸图3
	bomb3: {
		coordinates: [],
		mark: 'o',
		data: [[0,0,1,1,0,0],[1,0,0,1,1,0],[0,0,1,1,0,1],[0,1,1,1,1,0],[1,0,1,1,1,0],[0,1,1,1,1,1],[1,0,1,1,1,0],[0,1,0,1,0,1]]
	},
	// 防护罩
	wall: {
		coordinates: [],
		mark: 'w',
		data: [[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1]]
	},
	// 外星生物1
	alien1: {
		coordinates: [],
		mark: 'a1',
		score: 30,
		data1: [[0,0,1,0,0,0,0,0,1,0,0],[1,0,0,1,0,0,0,1,0,0,1],[1,0,1,1,1,1,1,1,1,0,1],[1,0,1,0,1,1,1,0,1,0,1],[1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,1,0],[0,0,1,0,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,0,1,0,0],[0,1,0,0,0,0,0,0,0,1,0]],
		data2: [[0,0,1,0,0,0,0,0,1,0,0],[0,0,0,1,0,0,0,1,0,0,0],[0,0,1,1,1,1,1,1,1,0,0],[0,0,1,0,1,1,1,0,1,0,0],[0,1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1],[1,0,1,0,0,0,0,0,1,0,1],[1,0,1,0,0,0,0,0,1,0,1],[0,0,0,1,1,0,1,1,0,0,0]]
	},
	// 外星生物2
	alien2: {
		coordinates: [],
		mark: 'a2',
		score: 20,
		data1: [[0,0,0,1,1,1,0,0,0],[0,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1],[1,1,1,0,1,0,1,1,1],[1,1,1,1,1,1,1,1,1],[0,0,0,1,0,1,0,0,0],[0,0,1,0,1,0,1,0,0],[1,1,0,0,0,0,0,1,1]],
		data2: [[0,0,0,1,1,1,0,0,0],[0,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1],[1,1,1,0,1,0,1,1,1],[1,1,1,1,1,1,1,1,1],[0,0,1,1,0,1,1,0,0],[0,1,0,0,1,0,0,1,0],[0,0,1,0,0,0,1,0,0]]
	},
	// 外星生物3
	alien3: {
		coordinates: [],
		mark: 'a3',
		score: 10,
		data1: [[0,0,0,1,1,0,0,0],[0,0,1,1,1,1,0,0],[0,1,1,1,1,1,1,0],[1,1,0,1,1,0,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,1,0,1,1,0,1,0],[1,0,0,0,0,0,0,1],[0,1,0,0,0,0,1,0]],
		data2:[[0,0,0,1,1,0,0,0],[0,0,1,1,1,1,0,0],[0,1,1,1,1,1,1,0],[1,1,0,1,1,0,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,1,0,0,1,0,0],[0,1,0,1,1,0,1,0],[1,0,1,0,0,1,0,1]]
	},
	// 特殊生物
	ufo: {
		coordinates: [],
		mark: 'u',
		score: 50,
		speed: 2,
		// 出现的时间间隔
		appear: 30*30,
		// 飞行的方向 left\right
		direction: null, 
		data: [[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0]]
	}
}
// document ready
$(function () {
	var game_box = $('#game-box');
	var canvas = $('#game-box canvas')[0];
	// console.log(canvas);
	game.ctx = canvas.getContext('2d');

	var doc_height = $(document).height();
	var map = game.map;
	map.grid.width = doc_height/map.grid.h_num;
	map.size.width = map.grid.width * map.grid.w_num;
	map.size.height = map.grid.width * map.grid.h_num;
	game_box.css('width',map.size.width+'px');
	// console.log(game_box.css.width);
	canvas.width = map.size.width;
	canvas.height = map.size.height;

	game.audios.launch = new Audio('wav/launch.wav');
	game.audios.bomb = new Audio('wav/bomb.wav');
	game.audios.ufo = new Audio('wav/ufo.wav');

	game.ctx.font = game.font;
	game.ctx.textBaseline = 'top';

	init();
});
// 初始化
function init() {
	var map = game.map;
	game.body = new Array();
	for(let i =0;i<map.grid.h_num;i++) {
		game.body[i] = new Array();
		for(let j = 0;j<map.grid.w_num;j++) {
			game.body[i][j] = 0;
		}
	}
	// 飞船的横坐标置为中值
	game.spaceship.coordinates.push(
		{x:(map.grid.w_num-game.spaceship.data[0].length)/2,y:game.map.spaceship.y_paly}
		);
	game.spaceship.coordinates.push(
		{x:22,y:game.map.spaceship.y_life}
		);
	game.spaceship.coordinates.push(
		{x:30+game.spaceship.data[0].length,y:game.map.spaceship.y_life}
		);
	// ufo
	game.ufo.direction = 'left';
	// wall
	let ufo_interval = (map.grid.w_num-4*game.wall.data[0].length)/5;
	for(let i=0;i<4;i++) {
		game.wall.coordinates.push(
			{x:ufo_interval*(i+1)+game.wall.data[0].length*i,y:game.map.wall.y}
		);
	}
	// alien1
	let alien_interval = game.alien1.data1[0].length/2;
	let alien_border = (game.map.grid.w_num-game.map.alien.num*game.alien1.data1[0].length-(game.map.alien.num-1)*alien_interval)/2;
	for(let row=0;row<1;row++) {
		for(let i=0;i<game.map.alien.num;i++) {
			game.alien1.coordinates.push(
				{x:alien_border+i*(game.alien1.data1[0].length+alien_interval),y:game.map.alien.y_aline1+row*(alien_interval+game.alien1.data1.length), timging:(i*2)%game.map.alien.timging, data:1}
			);
		}
	}
	
	// alien2
	alien_interval = (game.map.grid.w_num-alien_border*2-game.map.alien.num*game.alien2.data1[0].length)/(game.map.alien.num-1);
	for(let row=0;row<2;row++) {
		for(let i=0;i<game.map.alien.num;i++) {
			game.alien2.coordinates.push(
				{x:alien_border+i*(game.alien2.data1[0].length+alien_interval),y:game.map.alien.y_aline1+(row+1)*(alien_interval+game.alien1.data1.length), timging:(i*2)%game.map.alien.timging, data:1}
			);
		}
	}
	// alien3
	alien_interval = (game.map.grid.w_num-alien_border*2-game.map.alien.num*game.alien3.data1[0].length)/(game.map.alien.num-1);
	for(let row=0;row<2;row++) {
		for(let i=0;i<game.map.alien.num;i++) {
			game.alien3.coordinates.push(
				{x:alien_border+i*(game.alien3.data1[0].length+alien_interval),y:game.map.alien.y_aline1+(row+3)*(alien_interval+game.alien1.data1.length), timging:(i*2)%game.map.alien.timging, data:1}
			);
		}
	}
	game.score = 0;
	game.time = 0;
	game.life = 3;
	// 按照30fps刷新游戏
	game.timer = setInterval('updateGame()', 1000/30);
	// 绑定游戏操作
	gameOn();
}
// 获得最右边的alien 坐标
function getMostRight() {
	var mostRight = null;
	for(let coordinate of game.alien1.coordinates){
		if(mostRight === null || mostRight.x< coordinate.x) {
			mostRight = coordinate;
		}
	}
	for(let coordinate of game.alien2.coordinates){
		if(mostRight === null || mostRight.x< coordinate.x) {
			mostRight = coordinate;
		}
	}
	for(let coordinate of game.alien3.coordinates){
		if(mostRight === null || mostRight.x< coordinate.x) {
			mostRight = coordinate;
		}
	}
	return mostRight;
}
// 获得最右边的alien 坐标
function getMostLeft() {
	var mostLeft = null;
	for(let coordinate of game.alien1.coordinates){
		if(mostLeft === null || mostLeft.x>coordinate.x) {
			mostLeft = coordinate;
		}
	}
	for(let coordinate of game.alien2.coordinates){
		if(mostLeft === null || mostLeft.x>coordinate.x) {
			mostLeft = coordinate;
		}
	}
	for(let coordinate of game.alien3.coordinates){
		if(mostLeft === null || mostLeft.x>coordinate.x) {
			mostLeft = coordinate;
		}
	}
	return mostLeft;
}
// 产生一个敌方炮弹
function createEnemyBullet() {
	var enemy_num = game.alien1.coordinates.length+game.alien2.coordinates.length+game.alien3.coordinates.length;
	let sand = Math.floor(Math.random()*enemy_num+1);
	if(sand<=game.alien1.coordinates.length) {
		console.log("log： sand->"+sand);
		console.log("log： length->"+game.alien1.coordinates.length);
		game.enemy_bullet.coordinates.push(
			{x:game.alien1.coordinates[sand-1].x+game.alien1.data1[0].length/2,y:game.alien1.coordinates[sand-1].y+game.alien1.data1.length}
			);
	}else if(sand<=(game.alien1.coordinates.length+game.alien2.coordinates.length)) {
		sand-=game.alien1.coordinates.length;
		console.log("log： sand->"+sand);
		console.log("log： length->"+game.alien2.coordinates.length);
		game.enemy_bullet.coordinates.push(
			{x:game.alien2.coordinates[sand-1].x+game.alien2.data1[0].length/2,y:game.alien2.coordinates[sand-1].y+game.alien2.data1.length}
			);
	}else {
		sand-=game.alien1.coordinates.length+game.alien2.coordinates.length;
		console.log("log： sand->"+sand);
		console.log("log： length->"+game.alien3.coordinates.length);
		game.enemy_bullet.coordinates.push(
			{x:game.alien3.coordinates[sand-1].x+game.alien3.data1[0].length/2,y:game.alien3.coordinates[sand-1].y+game.alien3.data1.length}
			);
	}
}
// 计时器刷新函数
function updateGame() {
	game.time++;
	// 判断爆炸倒计时
	{
		let coordinates = game.bomb1.coordinates;
		for(let i=0;i<coordinates.length;i++) {
			game.bomb1.coordinates[i].timging--;
			if(game.bomb1.coordinates[i].timging<=0){
				game.bomb1.coordinates.splice(i,1);
			}
		}
	}
	{
		let coordinates = game.bomb2.coordinates;
		for(let i=0;i<coordinates.length;i++) {
			game.bomb2.coordinates[i].timging--;
			if(game.bomb2.coordinates[i].timging<=0){
				game.bomb2.coordinates.splice(i,1);
			}
		}
	}
	{
		let coordinates = game.bomb3.coordinates;
		for(let i=0;i<coordinates.length;i++) {
			game.bomb3.coordinates[i].timging--;
			if(game.bomb3.coordinates[i].timging<=0){
				game.bomb3.coordinates.splice(i,1);
			}
		}
	}
	// 判断alien摇摆倒计时
	{
		let coordinates = game.alien1.coordinates;
		for(let i=0;i<coordinates.length;i++) {
			game.alien1.coordinates[i].timging--;
			if(game.alien1.coordinates[i].timging<=0){
				game.alien1.coordinates[i].timging = game.map.alien.timging;
				if(game.alien1.coordinates[i].data===1) {
					game.alien1.coordinates[i].data=2;
				}else {
					game.alien1.coordinates[i].data=1;
				}
			}
		}
	}
	{
		let coordinates = game.alien2.coordinates;
		for(let i=0;i<coordinates.length;i++) {
			game.alien2.coordinates[i].timging--;
			if(game.alien2.coordinates[i].timging<=0){
				game.alien2.coordinates[i].timging = game.map.alien.timging;
				if(game.alien2.coordinates[i].data===1) {
					game.alien2.coordinates[i].data=2;
				}else {
					game.alien2.coordinates[i].data=1;
				}
			}
		}
	}
	{
		let coordinates = game.alien3.coordinates;
		for(let i=0;i<coordinates.length;i++) {
			game.alien3.coordinates[i].timging--;
			if(game.alien3.coordinates[i].timging<=0){
				game.alien3.coordinates[i].timging = game.map.alien.timging;
				if(game.alien3.coordinates[i].data===1) {
					game.alien3.coordinates[i].data=2;
				}else {
					game.alien3.coordinates[i].data=1;
				}
			}
		}
	}
	// 判断alien运动
	{
		game.map.alien.move_timing --;
		if(game.map.alien.move_timing<=0) {
			game.map.alien.move_timing = game.map.alien.move_max_timing;
			if(game.map.alien.direction === 'right') {
				let mostRight = getMostRight();
				if(mostRight.x<game.map.grid.w_num-game.alien1.data1[0].length) {
					for(let i=0; i<game.alien1.coordinates.length;i++) {
						game.alien1.coordinates[i].x += game.map.alien.move_length;
					}
					for(let i=0; i<game.alien2.coordinates.length;i++) {
						game.alien2.coordinates[i].x += game.map.alien.move_length;
					}
					for(let i=0; i<game.alien3.coordinates.length;i++) {
						game.alien3.coordinates[i].x += game.map.alien.move_length;
					}
				}else {
					game.map.alien.direction = 'left';
					for(let i=0; i<game.alien1.coordinates.length;i++) {
						game.alien1.coordinates[i].y += game.alien1.data1.length;
					}
					for(let i=0; i<game.alien2.coordinates.length;i++) {
						game.alien2.coordinates[i].y += game.alien1.data1.length;
					}
					for(let i=0; i<game.alien3.coordinates.length;i++) {
						game.alien3.coordinates[i].y += game.alien1.data1.length;
					}
				}
			}else {
				let mostLeft = getMostLeft();
				if(mostLeft.x>0) {
					for(let i=0; i<game.alien1.coordinates.length;i++) {
						game.alien1.coordinates[i].x -= game.map.alien.move_length;
					}
					for(let i=0; i<game.alien2.coordinates.length;i++) {
						game.alien2.coordinates[i].x -= game.map.alien.move_length;
					}
					for(let i=0; i<game.alien3.coordinates.length;i++) {
						game.alien3.coordinates[i].x -= game.map.alien.move_length;
					}
				}else {
					game.map.alien.direction = 'right';
					for(let i=0; i<game.alien1.coordinates.length;i++) {
						game.alien1.coordinates[i].y += game.alien1.data1.length;
					}
					for(let i=0; i<game.alien2.coordinates.length;i++) {
						game.alien2.coordinates[i].y += game.alien1.data1.length;
					}
					for(let i=0; i<game.alien3.coordinates.length;i++) {
						game.alien3.coordinates[i].y += game.alien1.data1.length;
					}
				}
			}
		}
	}
	// 判断ufo
	{
		let coordinates = game.ufo.coordinates;
		if(coordinates.length > 0) {
			if(game.audios.ufo.paused) {
				game.audios.ufo.play();
			}
			if(game.ufo.direction === 'left') {
				if(coordinates[0].x<game.map.grid.w_num) {
					game.ufo.coordinates[0].x += game.ufo.speed;
				}else {
					game.ufo.coordinates.pop();
					game.audios.ufo.pause();
					game.audios.ufo.currentTime = 0;
					game.ufo.direction = 'right';
				}
			}else {
				if(coordinates[0].x>-game.ufo.data[0].length) {
					game.ufo.coordinates[0].x -= game.ufo.speed;
				}else {
					game.ufo.coordinates.pop();
					game.audios.ufo.pause();
					game.audios.ufo.currentTime = 0;
					game.ufo.direction = 'left';
				}
			}
		}else if(game.time % game.ufo.appear === 0) {
			if(game.ufo.direction === 'left'){
				game.ufo.coordinates.push({x:-game.ufo.data[0].length,y:game.map.ufo.y});
			}else {
				game.ufo.coordinates.push({x:game.map.grid.w_num,y:game.map.ufo.y});
			}
		}
	}
	// 判断敌人子弹
	{
		for(let j=0;j<game.enemy_bullet.coordinates.length;j++) {
			// 子弹飞行
			for(let i=0;i<game.enemy_bullet.speed;i++){
				let mark = game.body[game.enemy_bullet.coordinates[j].y+1][game.enemy_bullet.coordinates[j].x];
				switch(mark) {
					case game.wall.mark:
					game.enemy_bullet.coordinates.splice(j,1);
					break;
					case game.spaceship.mark:
					game.enemy_bullet.coordinates.splice(j,1);
					break;
					default:
					game.enemy_bullet.coordinates[j].y++;
					if(game.enemy_bullet.coordinates[j].y>game.road.coordinates[0].y-game.bomb3.data.length) {

						game.bomb3.coordinates.push(
							{x:game.enemy_bullet.coordinates[j].x-game.bomb3.data[0].length/2,y:game.enemy_bullet.coordinates[j].y,timging:5}
							);
						game.enemy_bullet.coordinates.splice(j,1);
					}
				}
			}
		}
	}
	// 判断飞船子弹
	{
		let coordinates = game.player_bullet.coordinates;
		if(coordinates.length > 0) {
			// 子弹飞行
			for(let i=0;i<game.player_bullet.speed;i++) {
				if(game.player_bullet.coordinates.length<=0){
					break;
				}
				let mark = game.body[game.player_bullet.coordinates[0].y-1][game.player_bullet.coordinates[0].x];
				switch(mark) {
					case 0:
					game.player_bullet.coordinates[0].y--;
					if(game.player_bullet.coordinates[0].y<20) {
						// 飞船子弹飞到底部，直接爆炸
						// 添加爆炸
						game.bomb1.coordinates.push(
							{x:game.player_bullet.coordinates[0].x-game.bomb1.data[0].length/2,y:game.player_bullet.coordinates[0].y,timging:5}
							);
						
						game.player_bullet.coordinates.pop();
						game.audios.launch.pause();
						game.audios.bomb.play();
					}
					break;
					case game.wall.mark:
					// 遇到障碍物
					// 添加爆炸
					game.bomb1.coordinates.push(
						{x:game.player_bullet.coordinates[0].x-game.bomb1.data[0].length/2,y:game.player_bullet.coordinates[0].y,timging:5}
						);
					game.player_bullet.coordinates.pop();
					game.audios.launch.pause();
					game.audios.launch.currentTime = 0;
					game.audios.bomb.play();
					break;
					case game.ufo.mark :
					// 遇到ufo生物
					// 添加爆炸
					game.bomb2.coordinates.push(
						{x:game.ufo.coordinates[0].x,y:game.ufo.coordinates[0].y,timging:5}
						);
					game.ufo.coordinates.pop();
					game.audios.ufo.pause();
					game.audios.ufo.currentTime = 0;

					game.player_bullet.coordinates.pop();
					game.audios.launch.pause();
					game.audios.launch.currentTime = 0;
					game.audios.bomb.play();

					game.score+= game.ufo.score;
					break;
					default:
					if(mark.indexOf('a')===0) {
						let marks = mark.split('_');
						marks[1] = Number(marks[1]);
						switch(marks[0]) {
							case game.alien1.mark:
									// 添加爆炸
							game.bomb2.coordinates.push(
								{x:game.alien1.coordinates[marks[1]].x,y:game.alien1.coordinates[marks[1]].y,timging:5}
								);
							game.alien1.coordinates.splice(marks[1],1);
							game.audios.ufo.pause();
							game.audios.ufo.currentTime = 0;

							game.player_bullet.coordinates.pop();
							game.audios.launch.pause();
							game.audios.launch.currentTime = 0;
							game.audios.bomb.play();

							game.score+= game.alien1.score;
							break;
							case game.alien2.mark:
									// 添加爆炸
							game.bomb2.coordinates.push(
								{x:game.alien2.coordinates[marks[1]].x,y:game.alien2.coordinates[marks[1]].y,timging:5}
								);
							game.alien2.coordinates.splice(marks[1],1);
							game.audios.ufo.pause();
							game.audios.ufo.currentTime = 0;

							game.player_bullet.coordinates.pop();
							game.audios.launch.pause();
							game.audios.launch.currentTime = 0;
							game.audios.bomb.play();

							game.score+= game.alien2.score;
							break;
							case game.alien3.mark:
									// 添加爆炸
							game.bomb2.coordinates.push(
								{x:game.alien3.coordinates[marks[1]].x,y:game.alien3.coordinates[marks[1]].y,timging:5}
								);
							game.alien3.coordinates.splice(marks[1],1);
							game.audios.ufo.pause();
							game.audios.ufo.currentTime = 0;

							game.player_bullet.coordinates.pop();
							game.audios.launch.pause();
							game.audios.launch.currentTime = 0;
							game.audios.bomb.play();

							game.score+= game.alien3.score;
							break;
						}
					}
					break;
				}
			}
		}	
	}
	
	loadBody();
	draw();
}
// 加载游戏资源
function loadBody() {
	var map = game.map;
	for(let i =0;i<map.grid.h_num;i++) {
		for(let j = 0;j<map.grid.w_num;j++) {
			if(game.body[i][j] !== 'w' || game.body[i][j] !== 'r') {
				game.body[i][j] = 0;
			}
		}
	}
	// 加载地面
	for(let j = game.road.coordinates[0].x;j<game.road.coordinates[0].x+game.road.width;j++) {
		game.body[game.road.coordinates[0].y][j] = game.road.mark;
	}
	// 加载子弹
	if(game.player_bullet.coordinates.length > 0) {
		for(let i =game.player_bullet.coordinates[0].y;i<game.player_bullet.coordinates[0].y+game.player_bullet.length;i++) {
			game.body[i][game.player_bullet.coordinates[0].x] = game.player_bullet.mark;
		}
	}
	// 加载敌人子弹
	for(let j=0;j<game.enemy_bullet.coordinates.length;j++) {
		for(let i=game.enemy_bullet.coordinates[j].y;i<game.enemy_bullet.coordinates[j].y+game.enemy_bullet.length;i++) {
			game.body[i][game.enemy_bullet.coordinates[j].x] = game.enemy_bullet.mark+'_'+j;

		}
	}
	// 加载玩家的飞船
	quickLoadData(game.spaceship);
	// 加载ufo
	if(game.ufo.coordinates.length>0) {
		quickLoadData(game.ufo);
	}
	// 加载 wall 
	quickLoadData(game.wall);
	// 加载爆炸
	quickLoadData(game.bomb1);
	quickLoadData(game.bomb2);
	quickLoadData(game.bomb3);
	// 加载alien
	loadAlienData(game.alien1);
	loadAlienData(game.alien2);
	loadAlienData(game.alien3);
}
function quickLoadData(mem) {
	loadData(mem.coordinates,mem.data,mem.mark);
}
// 加载data
function loadData(coordinates,data,mark) {
	for(let coordinate of coordinates) {
		if(coordinate.x !== null && coordinate.y !== null) {
			coordinate.x = Math.floor(coordinate.x);
			coordinate.y = Math.floor(coordinate.y);
			for(let i = 0;i<data.length;i++) {
				for(let j = 0;j<data[0].length;j++) {
					if(data[i][j]===1) {
						game.body[i+coordinate.y][j+coordinate.x] = mark;
					}
				}
			}
		}
	}
}
// 加载alien data
function loadAlienData(alien) {
	var coordinates = alien.coordinates;
	var mark = alien.mark;
	var num = 0;
	for(let coordinate of coordinates) {
		if(coordinate.x !== null && coordinate.y !== null) {
			coordinate.x = Math.floor(coordinate.x);
			coordinate.y = Math.floor(coordinate.y);
			if(coordinate.data===1) {
				var data = alien.data1;
			}else {
				var data = alien.data2;
			}
			for(let i = 0;i<data.length;i++) {
				for(let j = 0;j<data[0].length;j++) {
					if(data[i][j]===1) {
						game.body[i+coordinate.y][j+coordinate.x] = mark +'_'+ num;
					}
				}
			}
		}
		num++;
	}
}
// 绘制地图
function draw() {
	var map = game.map;
	// 清空
	game.ctx.clearRect(0,0,map.size.width,map.size.height);
	for(let i = 0;i<map.grid.h_num;i++) {
		for(let j = 0;j<map.grid.w_num;j++) {
			if(game.body[i][j] !== 0){
				if(i<50) {
					game.ctx.fillStyle = game.color.red;
				}else if(i<200) {
					game.ctx.fillStyle = game.color.white;
				}else {
					game.ctx.fillStyle = game.color.green;
				}
				game.ctx.fillRect(j*map.grid.width,i*map.grid.width,map.grid.width,map.grid.width);
			}
		}
	}
	game.ctx.fillStyle = game.color.white;
	game.ctx.fillText('SCORE<1>',30, 10);
	game.ctx.fillText(('0000'+game.score).substr(-4),30, 40);
	game.ctx.fillText('HI-SCORE',220, 10);
	game.ctx.fillText(('0000'+game.score).substr(-4),220, 40);
	game.ctx.fillText(game.life, 30, 690);
	game.ctx.fillText('TIME',410, 690);
	game.ctx.fillText(('0000'+Math.floor(game.time/30)).substr(-4),500, 690);
}
function gameOn() {
	$(document).on('keypress',function(event) {
		var map = game.map;
		var coordinate = game.spaceship.coordinates[0];
		if(event.keyCode===97) {
			// 点击a
			if(coordinate.x>0) {
				game.spaceship.coordinates[0].x-=2;
			}
		}
		else if(event.keyCode===100) {
			// 点击d
			if(coordinate.x<(map.grid.w_num-game.spaceship.data[0].length)) {
				game.spaceship.coordinates[0].x+=2;
			}
		}
		else if(event.keyCode===32) {
			// 点击空格
			if(game.player_bullet.coordinates.length <= 0 ) {
				game.player_bullet.coordinates.push(
					{x: coordinate.x + (game.spaceship.data[0].length-1)/2,y:coordinate.y}
					);
				game.audios.launch.play();
				if(game.enemy_bullet.coordinates.length < 3) {
					createEnemyBullet();
				}
			}
		}
	});
}
function gameOff() {
	$(document).off('keypress');
}