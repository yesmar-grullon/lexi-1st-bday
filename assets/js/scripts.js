window.onload = (event) => {
    document.querySelector("#videoWithJs").addEventListener("click",(event) =>{
        if( $("#videoWithJs").prop('muted') ) {
            $("#videoWithJs").prop('muted', false);
            $(this).text('Mute');
        // or toggle class, style it with a volume icon sprite, change background-position
        } else {
            $("#videoWithJs").prop('muted', true);
            $(this).text('Unmute');
        }
    });

};