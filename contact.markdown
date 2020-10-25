---
layout: pages
title: Contacts
---
<html>
    <style>
        .white-space{
            display: flex;
            justify-content: space-evenly;
        }
        button{
            background-color: #0D0D0D;
            border: solid;
            border-color: white;
            color: white;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            padding: 10px;
            margin-right: 59px;
        }
        button:hover {
            color: #a1a1a1;
        }
        .details{
            padding-right: 5%;
        }
        .links{
            padding-left: 5%;
        }
        .links a{
            display: block;
        }
        .hide{
            display: none;
        }
        @media screen and (max-width: 600px) {
            .white-space{
                display: block;
            } 
            .contact-form{
                border: none;
            }
            .details{
                padding-left: 5%;
            }
            .designer{
                padding-left: 5%;
            }
        }
    </style>
    <div class="white-space">
        <div class="details">
            <h2>
                Details
            </h2>
        <div class="email" id="email">
            <p>
                C. G. Davin Leonardo<br/>
                Indonesia<br/>
                Email address:
            </p>
            <button class="view" id="view" onclick="reveal()">View email address</button>
        </div>
        <script type="text/javascript" src="Assets/protect.js"></script>
        </div>
        <div class="designer">
            <h2>
                Website Designer
            </h2>
            <p>
                This website is designed by myself!
            </p>
            <p>See my other IT-related works <br/>
                on my portfolio website:</p>
            <a>Coming soon</a>
        </div>
        <div class="links">      
            <h2>
            External Links
            </h2>
            <a href="https://audiomack.com/artist/cgdl" target="_blank">Listen to my music on Audiomack</a><br/>
            <a href="https://www.sheetmusicplus.com/publishers/c-g-davin-leonardo-sheet-music/3016881?isPLP=1" target="_blank">Buy sheet music on SheetMusicPlus</a><br/>
            <a href="https://www.instagram.com/cg_davin/" target="_blank">Follow me on Instagram</a><br/>
            <a href="https://www.youtube.com/channel/UCd75ijWyLkJ8ge_ph2-_UOw" target="_blank">Subscribe to my Youtube Channel</a>
        </div>
    </div>
</html>