/**
 * Created by ��· on 2017/5/2.
 */
window.onload=function(){
        nav();
       banner();
        bottom();
}



//����������ͼ
var nav=function(){
    var navFather=document.querySelector(".ny_nav");
    var spans=navFather.querySelectorAll("span")
    for(var i=0;i<spans.length;i++){
        if(i<spans.length/2){
            spans[i].style.background='url("image/nav.png") no-repeat '+-187*i/100+'rem  0';
        }else{
            spans[i].style.background='url("image/nav.png") no-repeat '+-187*(i-4)/100+'rem  '+-142/100+'rem';
        }

        spans[i].style.backgroundSize="400% 200%"
    }
}


var banner=function(){
    $(function(){
        /*��ʼ���ֲ�ͼ*/
        new Swiper('.swiper-container',{
            /*1.�Զ��ֲ�*/
            autoplay:1000,
            /*2.�޷컬��*/
            loop:true,
            /*3.��ʾָʾ��*/
            pagination:'.swiper-pagination',
            /*4.�û��������ٴ��ֲ�*/
            autoplayDisableOnInteraction:false
        });
    })
}

var bottom=function(){
    var footer= document.querySelector(".ny_tabs");
    var links =footer.querySelectorAll("a");
    console.log(links)
    for(var i=0; i<links.length  ;i++){
        links[i].index=i;
        if(i==0){
            links[i].style.background='url("image/navnew2.png") no-repeat '+-187*i/100+'rem  0';
        }else{
            links[i].style.background='url("image/snavnew11.png") no-repeat '+-187*i/100+'rem  0';
        }
        links[i].style.backgroundSize="400% 100%"
        links[i].onclick=function(){
            for(var i=0;i<links.length;i++){
                links[i].style.background='url("image/snavnew11.png") no-repeat '+-187*i/100+'rem  0';
                links[i].style.backgroundSize="400% 100%"
            }
            console.log(this.index)
            links[this.index].style.background='url("image/navnew2.png") no-repeat '+-187*(this.index)/100+'rem  0';
            links[this.index].style.backgroundSize="400% 100%"
        }
        //spans[i].style.background='url("image/nav.png") no-repeat '+-187*i/100+'rem  0;'

        console.log(1)
    }
}