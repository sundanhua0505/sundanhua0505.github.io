//监听 页面滚动.水平 方向,垂直方向.监听滚动的距离.
//返回值:对象. var obj = scroll(); 对象 一系列属性构成. 属性访问:obj.left 
//scroll().left
//dom 操作. 获取样式 非行内样式: window.getComputedStyle(元素节点,null).width
function scroll() {
    if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
    {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
    // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    } else {
    	 return { //  剩下的肯定是怪异模式的
	        left: document.body.scrollLeft,
	        top: document.body.scrollTop
    	}
    }
   
}