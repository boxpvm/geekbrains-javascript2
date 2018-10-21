var config = [{
	href: '/',
	name: "Главная"
}, {
	href: '/catalog',
	name: "Каталог",
	items: [{
			href: '/cat1',
			name: "Товар 1"
		}, {
			href: '/cat2',
			name: "Товар 2"
		}, {
			href: '/cat3',
			name: "Товар 3"
		}, {
			href: '/cat4',
			name: "Товар 4"
		}],

}, {
	href: '/gallery',
	name: "Галерея",
	items: [{
			href: '/photo1',
			name: "Фото 1"
		}, {
			href: '/photo2',
			name: "Фото 2"
		}, {
			href: '/phpto3',
			name: "Фото 3"
		}],
}];

class Container {
	constructor(id){
		this.id = id;
	}
	delete(){
		if(this.id) document.getElementById(this.id).remove();
	}
};

class Menu extends Container {
	constructor(id, config){
		super();
		this.id = id;
		this.items = [];
		this.createItems(config);
	}
	createItems(config){
		for (let i = 0; i < config.length; i++) {
			this.items.push([new MenuItem(config[i].href, config[i].name)]);
		}
		
		for (let i = 0; i < config.length; i++) {
			if (config[i].items) {
				for (let j = 0; j < config[i].items.length; j++) {
					this.items[i].push(new MenuItem(config[i].items[j].href, config[i].items[j].name));
				}
			}	
		}
	}
	create(){
		document.write(this.render());
	}
	render(){
		let result = '<ul id="' + this.id + '">';

		for (let i = 0; i < this.items.length; i++) {
			result += this.items[i][0].render();
			if (this.items[i][1]) result += this.render1(i);
		}
		result += '</ul>';
		return result;
	}
	render1(i){
		let result = '<ul id="' + this.id + '_' + i + '">';
		for (let j = 1; j < this.items[i].length; j++) {
			result += this.items[i][j].render(i);
		}
		result += '</ul>';
		return result;		
	}
};

class MenuItem extends Container {
	constructor(href, name){
		super();
		this.href = href;
		this.name = name;
	}
	render(){
		return '<li><a href="' + this.href + '">' + this.name + '</a></li>';
	}
}

let menu = new Menu("main-menu", config);
menu.create();
let delMenu = new Container("main-menu_2");
delMenu.delete();