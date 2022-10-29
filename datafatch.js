fetch("datafatch.json")
.then(res => res.json())
.then(function(data){
    const tbody = document.querySelector('#body');
    let html = '';
    for(let student of data){
        html += '<tr>';
        
        html += '<td>' + student.id + '</td>'
        html += '<td>' + student.Name + '</td>'
        html += '<td>' + student.Attendens + '</td>'
        if(student.Days == "TTS"){
            html += '<td style="background-color:lightgreen;">' + student.Days + '</td>'
        }
        else if(student.Days == "MWF"){
            html += '<td style="background-color:red;">' + student.Days + '</td>'
        }

       html += '</tr>';     
    }
    tbody.innerHTML = html;
})