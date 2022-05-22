window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    let paint = true;
    let drawon = function(tf) {
        if (paint) {
            if (!paint) {alert("hi");return false}
            let color = 'black';

            //Change Color Paint Line
            change_color = function (chColor) {
                color = chColor;
                if (color == 'red') {
                    alert('Вы изменили цвет кисточки на КРАСНЫЙ');
                }
                else if (color == 'blue') {
                    alert('Вы изменили цвет кисточки на СИНИЙ');
                }
                else if (color == 'green') {
                    alert('Вы изменили цвет кисточки на ЗЕЛЁНЫЙ');
                }
                else if (color == 'black') {
                    alert('Вы изменили цвет кисточки на ЧЁРНЫЙ');
                }
                else if (color == 'yellow') {
                    alert('Вы изменили цвет кисточки на ЖЁЛТЫЙ');
                }
            }

            //Resizing
            canvas.height = '1200';
            canvas.width = '1900';


            //ChangeWidthLine

            let widthLine = 5

            new_widthLine = function (variable) {
                if (variable == '+') {
                    widthLine++;
                    console.log("Толщика косточки:" + widthLine);
                }
                else {
                    widthLine--;
                    console.log("Толщика косточки:" + widthLine);
                }
            }    
           //varibles

            let painting = false;

            function startPosition() {
                painting = true;
                ctx.strokeStyle = color;
            }

            function finishedPosition() {
                painting = false;
                ctx.beginPath();
            }

            function draw (e) {
                if(!painting) return;
                ctx.lineWidth = widthLine;
                ctx.lineCap = 'round';

                ctx.lineTo(e.clientX, e.clientY);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(e.clientX, e.clientY);

            }
            //EventListeners

            canvas.addEventListener('mousedown', startPosition);
            canvas.addEventListener('mouseup', finishedPosition);
            canvas.addEventListener('mousemove', draw)
        }
        else {
            alert('paint off')
        }
    }
    drawon(true);
    //Line Mouse
    
});