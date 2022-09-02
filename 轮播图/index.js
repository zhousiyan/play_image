class Slide {
    config = {
      content: arr,
      containerClassName: 'container',
      directionClassName: 'direction',
      boxClassName: 'box',
      contentClassName: 'content',
      ldirectionClassName: 'ldirection',
      rdirectionClassName: 'rdirection',
      timer : 1000,

      viewPosition: 'relative',
      viewMargin: '0 auto',
      viewWidth: '300px',
      viewHeight: '400px',
      viewbackgroundColor: 'aqua',

      containerPosition: 'relative',
      containerWidth: '300000px',
      containerHeight: '400px',
      containerbackgroundColor: 'rgb(230, 14, 14)',

      boxPosition: 'absolute',
      boxHeight: '300px',

      contentfloat: 'left',
      contentwidth: '300px',
      contentHeight: '300px',
      contentFontsize: '30px',
      contentTextAligen: 'cener',


      directionPosition: 'absolute',
      directionDisplay: 'flex',
      directionJustifyContent: 'space-between',
      directionTop: '100px',
      directionFontsize: '40px',
      directionWidth: '300px',
    };

    // 初始化
    css(){
        this.view.style.position = 'relative';
        this.view.style.margin = '0 auto';
        this.view.style.width = this.config.viewWidth;
        this.view.style.height = this.config.viewHeight;
        this.view.style.backgroundColor = this.config.viewbackgroundColor;

        this.container.style.position = 'relative';
        this.container.style.width = '300000px';
        this.container.style.height = this.config.containerHeight;
        this.container.style.backgroundColor = this.config.containerbackgroundColor;

        for (let index = 0; index < this.box.length; index++) {
          this.box[index].style.position = 'absolute';
          this.box[index].style.height = this.config.boxHeight;
        }
        
        for (let index = 0; index < this.content.length; index++) {
          this.content[index].style.float = 'left';
          this.content[index].style.width = this.config.contentwidth;
          this.content[index].style.height = this.config.contentHeight;
          this.content[index].style.fontSize = this.config.contentFontsize;
          this.content[index].style.textAlign = this.config.contentTextAligen;
          
        }
        
        this.direction.style.position = 'absolute';
        this.direction.style.display = 'flex';
        this.direction.style.justifyContent = 'space-between';
        this.direction.style.top = '100px';
        this.direction.style.fontSize = this.config.directionFontsize;
        this.direction.style.width = this.config.directionWidth;

    }


    html() {
      this.view = document.querySelector(this.config.selector);
      console.log('hellowodr');
      // 自动生成轮播图的元素
      this.view.insertAdjacentHTML('beforeend','<div class="' + this.config.containerClassName + '"></div>');
      this.view.insertAdjacentHTML('beforeend','<div class="' + this.config.directionClassName + '"></div>');

      this.view.insertAdjacentHTML('beforeend','<ol></ol>');

      this.container = document.querySelector('.'+ this.config.containerClassName);
      this.container.insertAdjacentHTML('beforeend','<div class="' + this.config.boxClassName + '"></div>');

      console.log(this.config.ldirection);
      this.direction = document.querySelector('.'+ this.config.directionClassName);
      this.direction.insertAdjacentHTML('beforeend','<a href="#" class="' +this.config.ldirectionClassName+ '"><</a>');
      this.direction.insertAdjacentHTML('beforeend','<a href="#" class="' +this.config.rdirectionClassName+ '">></a>');

      this.viewbox = document.querySelector('.' + this.config.boxClassName);
      for (let i = 0; i < this.config.content.length; i++) {
        this.viewbox.insertAdjacentHTML('beforeend',`<div class=${this.config.contentClassName} style="background-color:yellow">${arr[i]}</div>`);
      }

      this.content = document.getElementsByClassName(this.config.contentClassName);
      this.contentlen =document.querySelectorAll('.' + this.config.contentClassName)

      this.container.insertAdjacentHTML('beforeend', this.viewbox.outerHTML);
      this.container.insertAdjacentHTML('beforeend', this.viewbox.outerHTML);
      this.box = document.querySelectorAll('.' + this.config.boxClassName);

      


      this.ldirection = document.querySelector('.' + this.config.ldirectionClassName);
      this.rdirection = document.querySelector('.'+ this.config.rdirectionClassName);

    }

    //播放总事件
    playevent(){
      this.html();
      this.css();
      //获取显示所有内容总长度
      this.boxWidth = this.viewbox.clientWidth;
      console.log('this.boxWidth:', this.boxWidth);
      //获取单个内容的长度
      this.contentwidth =this.content[0].clientWidth;

      this.index = this.contentlen.length*- 1;
      // 因为box绝对定位，所以计算每个left按照顺序进行依次排序
      this.box.forEach((value, key) => {
        value.style.left = (key *this.boxWidth) + 'px';
      })
      this.container.style.left = this.index*this.contentwidth +'px';
      console.log(this.index);
      
      this.contentIndex = 1;

      this.timer = setInterval(() =>{
        this.rdirection.click();
      }, this.config.timer)


      this.view.addEventListener('mouseenter', () => {
        this.ldirection.style.display = 'block';
        this.rdirection.style.display = 'block';

        clearInterval(this.timer);
      })


      this.view.addEventListener('mouseleave', () => {
        this.ldirection.style.display = 'none';
        this.rdirection.style.display = 'none';

        this.timer = setInterval(() =>{
        this.rdirection.click();
      },1000)
      })



      this.ldirection.addEventListener('click',(event)=>{
        this.index += 1;
        this.contentIndex -= 1;
        this.container.style.left = this.index*this.contentwidth + 'px';


        if(this.contentIndex == 0){
          this.firstBox = document.querySelector('.box:first-child');
          this.lastBox = document.querySelector('.box:last-child');

          this.left = parseInt(this.firstBox.style.left.replace('px', ''));

          this.lastBox.style.left = (this.left - this.boxWidth) +'px';

          this.firstBox.insertAdjacentHTML('beforebegin', this.lastBox.outerHTML);
          this.lastBox.remove();
          this.contentIndex = this.contentlen.length;
        }
      })


      this.rdirection.addEventListener('click',(event)=>{
      this.index -= 1;
      this.contentIndex += 1;

      this.container.style.left = this.index * this.contentwidth + 'px';


      
      if (this.contentIndex >=this.contentlen.length+1) {
        this.firstBox = document.querySelector('.box:nth-child(1)');
        this.lastBox = document.querySelector('.box:last-child');

        this.left = parseInt(this.lastBox.style.left.replace('px', ''));

        this.firstBox.style.left = this.left + this.boxWidth +'px';
        this.lastBox.insertAdjacentHTML('afterend', this.firstBox.outerHTML);
        this.firstBox.remove();
        this.contentIndex = 1;
        }

      })
    }


    constructor(settings) {
      for (const key in settings) {
        const value = settings[key];
        this.config[key] = value;
      }

      this.playevent();
    }
}

  let arr = [1,2,3,4,5]