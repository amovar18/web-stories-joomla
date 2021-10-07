function loaded(){
    document.body.className = document.body.className.replace( 'no-js', 'js' );
    console.log(document.body.className.replace( 'no-js', 'js' ));
}
window.addEventListener('beforeunload', (event) => {
    event.returnValue = `Are you sure you want to leave?`;
  });