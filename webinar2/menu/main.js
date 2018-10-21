class Container {
	remove() {
		document.getElementById(this.id).remove();
	}
};

class Menu extends Container {
	constructor(id, config){
		super();
		this.id = id;
		this.items = [];
		if (!config) {
			this.fetchMenu();
		} else {
			this.createItems(config);
		}
	}
	fetchMenu(){
		var url = "items.json";
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.send();
		var self = this;

		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					var config = JSON.parse(xhr.responseText);
					self.createItems(config);
					self.create();
				}
			}
		};
	}
	createItems(config){
		for (let i = 0; i < config.length; i++) {
			this.items.push(new MenuItem(config[i].href, config[i].name));

			if (config[i].items) {
				this.items.push(new Menu("submenu" + i, config[i].items));
			}
		}
	}
	create(){
		document.write(this.render());
	}
	render(){
		let result = '<ul id="' + this.id + '">';

		for (let i = 0; i < this.items.length; i++) {
			result += this.items[i].render();
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

let menu = new Menu("main-menu");