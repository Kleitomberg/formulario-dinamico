


  function campos(){

    var select = document.getElementById('tipoUsuario');
	  var value = select.options[select.selectedIndex].value;

   if(value == 1){
    produtor()
   }else if(value == 2){
    agroindustria()
   }else if(value == 3){
    associacao()
     
   }else if(value == 4){
    orgao()
     
  }else if(value == 0){
    vazio()
     
  }

  function vazio (){
    var agroindustria = document.getElementById('formulario-agroindustria')
      var produtor = document.getElementById('formulario-produtor')
      var associacao = document.getElementById('formulario-Associacao')
       var orgao = document.getElementById('formulario-orgao')

       var legenda = document.getElementById('leg')
     
       legenda.classList.remove('d-none');
       legenda.classList.add('d-block');

       associacao.classList.remove('d-block');
      associacao.classList.add('d-none');
      orgao.classList.remove('d-block');
      orgao.classList.add('d-none');

       agroindustria.classList.remove('d-block');
      agroindustria.classList.add('d-none');
      produtor.classList.remove('d-block');
      produtor.classList.add('d-none');
  }

 
    function produtor(){
    var produtor = document.getElementById('formulario-produtor')
     var agroindustria = document.getElementById('formulario-agroindustria')
     var associacao = document.getElementById('formulario-Associacao')
       var orgao = document.getElementById('formulario-orgao')
   
       var legenda = document.getElementById('leg')
     
       legenda.classList.add('d-none');
    

    produtor.classList.remove('d-none');
    produtor.classList.add('d-block');

       associacao.classList.remove('d-block');
      associacao.classList.add('d-none');
      orgao.classList.remove('d-block');
      orgao.classList.add('d-none');

       agroindustria.classList.remove('d-block');
      agroindustria.classList.add('d-none');

    }

    function agroindustria(){
      var agroindustria = document.getElementById('formulario-agroindustria')
      var produtor = document.getElementById('formulario-produtor')
      var associacao = document.getElementById('formulario-Associacao')
       var orgao = document.getElementById('formulario-orgao')

       var legenda = document.getElementById('leg')
     
       legenda.classList.add('d-none');
      agroindustria.classList.remove('d-none');
      agroindustria.classList.add('d-block');


      produtor.classList.remove('d-block');
      produtor.classList.add('d-none');
      associacao.classList.remove('d-block');
      associacao.classList.add('d-none');
      orgao.classList.remove('d-block');
      orgao.classList.add('d-none');

      
  
      }

      function associacao(){
        
    
        var agroindustria = document.getElementById('formulario-agroindustria')
      var produtor = document.getElementById('formulario-produtor')
      var associacao = document.getElementById('formulario-Associacao')
       var orgao = document.getElementById('formulario-orgao')

       var legenda = document.getElementById('leg')
     
       legenda.classList.add('d-none');

        associacao.classList.remove('d-none');
        associacao.classList.add('d-block');

        produtor.classList.remove('d-block');
      produtor.classList.add('d-none');
      orgao.classList.remove('d-block');
      orgao.classList.add('d-none');
      agroindustria.classList.remove('d-block');
      agroindustria.classList.add('d-none');
    
        }

        function orgao(){
          var agroindustria = document.getElementById('formulario-agroindustria')
          var produtor = document.getElementById('formulario-produtor')
          var associacao = document.getElementById('formulario-Associacao')
           var orgao = document.getElementById('formulario-orgao')

         var legenda = document.getElementById('leg')
     
       legenda.classList.add('d-none');
      
          orgao.classList.remove('d-none');
          orgao.classList.add('d-block');



      produtor.classList.remove('d-block');
      produtor.classList.add('d-none');
      associacao.classList.remove('d-block');
      associacao.classList.add('d-none');
      agroindustria.classList.remove('d-block');
      agroindustria.classList.add('d-none');

      
          }
    

  }