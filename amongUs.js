let str = "";
let voteCount = {
    pikachu : 0,
    squirtle : 0,
    bulbasaur : 0,
    treecko : 0,
    mudkip : 0,
    torchic : 0,
    totodile : 0,
    chikorita : 0,
    quilava : 0,
    piplup : 0
};

$(document).ready(
    function(){
        $("#div1").click(
            function(){
                $("#chosen_pokemon").val("Pikachu");
				str += "Pikachu has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.pikachu++;
                $("#p1vote").html(voteCount.pikachu);            
            }
        );

        $("#div2").click(
            function(){
                $("#chosen_pokemon").val("Squirtle");
				str += "Squirtle has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.squirtle++;
                $("#p2vote").html(voteCount.squirtle);            
            }
        );

        $("#div3").click(
            function(){
                $("#chosen_pokemon").val("Bulbasaur");
				str += "Bulbasaur has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.bulbasaur++;
                $("#p3vote").html(voteCount.bulbasaur);            
            }
        );

        $("#div4").click(
            function(){
                $("#chosen_pokemon").val("Treecko");
				str += "Treecko has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.treecko++;
                $("#p4vote").html(voteCount.treecko);            
            }
        );

        $("#div5").click(
            function(){
                $("#chosen_pokemon").val("Mudkip");
				str += "Mudkip has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.mudkip++;
                $("#p5vote").html(voteCount.mudkip);            
            }
        );

        $("#div6").click(
            function(){
                $("#chosen_pokemon").val("Torchic");
				str += "Torchic has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.torchic++;
                $("#p6vote").html(voteCount.torchic);            
            }
        );

        $("#div7").click(
            function(){
                $("#chosen_pokemon").val("Totodile");
				str += "Totodile has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.totodile++;
                $("#p7vote").html(voteCount.totodile);            
            }
        );

        $("#div8").click(
            function(){
                $("#chosen_pokemon").val("Chikorita");
				str += "Chikorita has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.chikorita++;
                $("#p8vote").html(voteCount.chikorita);            
            }
        );

        $("#div9").click(
            function(){
                $("#chosen_pokemon").val("Quilava");
				str += "Quilava has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.quilava++;
                $("#p9vote").html(voteCount.quilava);            
            }
        );

        $("#div10").click(
            function(){
                $("#chosen_pokemon").val("Piplup");
				str += "Piplup has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.piplup++;
                $("#p10vote").html(voteCount.piplup);            
            }
        );
    }
)

