const e=(e,t="YYYY-MM-DD hh:mm:ss")=>{const s=new Date(e).getTime(),c=new Date(s);let l=t.replace("YYYY",c.getFullYear().toString());return l=l.replace("MM",`0${c.getMonth()+1}`.slice(-2)),l=l.replace("DD",`0${c.getDate()}`.slice(-2)),l=l.replace("hh",`0${c.getHours()}`.slice(-2)),l=l.replace("mm",`0${c.getMinutes()}`.slice(-2)),l=l.replace("ss",`0${c.getSeconds()}`.slice(-2)),l};export{e as u};
