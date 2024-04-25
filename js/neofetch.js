document.getElementById('resolution').innerHTML = ' ' + screen.width + 'x' + screen.height;
                            document.getElementById('browser').innerHTML = ' ' + navigator.userAgent;

                            const date = new Date();

                            document.getElementById('date').innerHTML = ' ' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
                            document.getElementById('cpu').innerHTML = ' ' + navigator.hardwareConcurrency + ' cores';