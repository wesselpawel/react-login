import React from "react";

function Home(){
    return(
        <div>
            
            <div class="all">
                <div class="left-panel">
                    <h1>Witamy na stronie Paznokietki.pl</h1>
                    <h2>To jedyne miejsce w internecie w pełni poświęcone kobietom i ich potrzebom.</h2>
                    <h2>Już po zalogowaniu można zamieszczać w pełni darmowe ogłoszenia, które potencjalni klienci zobaczą na stronie głównej, lub po kliknięciu w zakładkę "Ogłoszenia".</h2>
                    <h2>Życzymy wesołych świąt oraz zapraszamy do korzystania z naszego serwisu.</h2>
                    <h1>Pozdrawiamy</h1>
                <hr/>
                <br/>
                <h1>Malowanie Hybrydą - Jak nakładać aby nie odpadała?</h1>
                    <div style={{width:"100%"}} className="center">
                        <div class="video"> <iframe title="video" class="video" width="100%" height="100%" src="https://www.youtube.com/embed/jlXLESQfKPs" frameborder="0" allowfullscreen></iframe></div>
                </div>
                <br/>
            </div>
    <div id="right_panel" class="right-panel">
   
        <div class="right-panel-headers">
        
        <img class="img-text" style={{width:"70%"}} src="./images/ogloszenia2.png" alt=""/>
        </div>
    

    <div class="more"> <a href="ogloszenia.php">Zobacz więcej</a> </div>
        <div class="right-panel-headers">
            <img class="img-text" style={{width:"80%"}} src="images/polecamy2.png" alt=""/>
        </div>
        <img style={{width:"80%"}} src="images/chudnijp.png" alt=""/>
        </div>
    </div>
</div>

)};

export default Home;