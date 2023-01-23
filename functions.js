var data = {

    'BRO': {
    
    'BSN': { 'W': 10, 'L': 12 },
    
    'CHC': { 'W': 15, 'L': 7 },
    
    'CIN': { 'W': 15, 'L': 7 },
    
    'NYG': { 'W': 14, 'L': 8 },
    
    'PHI': { 'W': 14, 'L': 8 },
    
    'PIT': { 'W': 15, 'L': 7 },
    
    'STL': { 'W': 11, 'L': 11 }
    
    },
    
    'BSN': {
    
    'BRO': { 'W': 12, 'L': 10 },
    
    'CHC': { 'W': 13, 'L': 9 },
    
    'CIN': { 'W': 13, 'L': 9 },
    
    'NYG': { 'W': 13, 'L': 9 },
    
    'PHI': { 'W': 14, 'L': 8 },
    
    'PIT': { 'W': 12, 'L': 10 },
    
    'STL': { 'W': 9, 'L': 13 }
    
    },
    
    'CHC': {
    
    'BRO': { 'W': 7, 'L': 15 },
    
    'BSN': { 'W': 9, 'L': 13 },
    
    'CIN': { 'W': 12, 'L': 10 },
    
    'NYG': { 'W': 7, 'L': 15 },
    
    'PHI': { 'W': 16, 'L': 6 },
    
    'PIT': { 'W': 8, 'L': 14 },
    
    'STL': { 'W': 10, 'L': 12 }
    
    },
    
    'CIN': {
    
    'BRO': { 'W': 7, 'L': 15 },
    
    'BSN': { 'W': 9, 'L': 13 },
    
    'CHC': { 'W': 10, 'L': 12 },
    
    'NYG': { 'W': 13, 'L': 9 },
    
    'PHI': { 'W': 13, 'L': 9 },
    
    'PIT': { 'W': 13, 'L': 9 },
    
    'STL': { 'W': 8, 'L': 14 }
    
    },
    
    'NYG': {
    
    'BRO': { 'W': 8, 'L': 14 },
    
    'BSN': { 'W': 9, 'L': 13 },
    
    'CHC': { 'W': 15, 'L': 7 },
    
    'CIN': { 'W': 9, 'L': 13 },
    
    'PHI': { 'W': 12, 'L': 10 },
    
    'PIT': { 'W': 15, 'L': 7 },
    
    'STL': { 'W': 13, 'L': 9 }
    
    },
    
    'PHI': {
    
    'BRO': { 'W': 8, 'L': 14 },
    
    'BSN': { 'W': 8, 'L': 14 },
    
    'CHC': { 'W': 6, 'L': 16 },
    
    'CIN': { 'W': 9, 'L': 13 },
    
    'NYG': { 'W': 10, 'L': 12 },
    
    'PIT': { 'W': 13, 'L': 9 },
    
    'STL': { 'W': 8, 'L': 14 }
    
    },
    
    'PIT': {
    
    'BRO': { 'W': 7, 'L': 15 },
    
    'BSN': { 'W': 10, 'L': 12 },
    
    'CHC': { 'W': 14, 'L': 8 },
    
    'CIN': { 'W': 9, 'L': 13 },
    
    'NYG': { 'W': 7, 'L': 15 },
    
    'PHI': { 'W': 9, 'L': 13 },
    
    'STL': { 'W': 6, 'L': 16 }
    
    },
    
    'STL': {
    
    'BRO': { 'W': 11, 'L': 11 },
    
    'BSN': { 'W': 13, 'L': 9 },
    
    'CHC': { 'W': 12, 'L': 10 },
    
    'CIN': { 'W': 14, 'L': 8 },
    
    'NYG': { 'W': 9, 'L': 13 },
    
    'PHI': { 'W': 14, 'L': 8 },
    
    'PIT': { 'W': 16, 'L': 6 }
    
    }
    
}    
$( document ).ready(function() {
    var teams = [];
    $.each(data, function(i, val){
        teams.push(i);
        $('#team-names').append(`<th> ${i} </th>`);
    });

    count = 0
    while (count <= teams.length - 1){
        wins = [];
        currentTeam = teams[count];
        placeholder = '--'
        $.each(data[teams[count]], function(j, team){
            $.each(team, function(letter, points){
                if (letter === 'W'){
                    console.log(points);
                    wins.push(points);
                }
            });
        });
        wins.splice(count, 0, placeholder);
        
        $('#score-board').append(`<tr id="${currentTeam}"> 
            <th>${currentTeam}</th>
        </tr>`);
        
        $.each(wins, function(i, val){
            $("#"+currentTeam).append(`<td> ${val} </td>`);
            console.log(i, val);
        });
        count ++;
    }
    // add the last header row to the bottom of the table
    $('#score-board').append(`<tr id="team-names2"> </tr>`);
    $('#team-names2').append(`<th> empty </th>`);
    $.each(data, function(i, val){
        teams.push(i);
        $('#team-names2').append(`<th> ${i} </th>`);
    });
     

});