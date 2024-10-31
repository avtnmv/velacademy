function toggleVisibility(divId, iconClass) {
    var param = document.getElementById(divId);
    var svgIcon = document.querySelector(iconClass); 

    if (param.style.display === "none" || param.style.display === "") {
        param.style.display = "block";
        svgIcon.classList.add('rotated'); 
    } else {
        param.style.display = "none";
        svgIcon.classList.remove('rotated'); 
    }
}

function look() { toggleVisibility('div1', '.svg-icon'); }
function look2() { toggleVisibility('div2', '.svg-icon2'); }
function look3() { toggleVisibility('div3', '.svg-icon3'); }
function look4() { toggleVisibility('div4', '.svg-icon4'); }
function look5() { toggleVisibility('div5', '.svg-icon5'); }
function look6() { toggleVisibility('div6', '.svg-icon6'); }
function look7() { toggleVisibility('div7', '.svg-icon7'); }
function look8() { toggleVisibility('div8', '.svg-icon8'); }
function look9() { toggleVisibility('div9', '.svg-icon9'); }
function look10() { toggleVisibility('div10', '.svg-icon10'); }