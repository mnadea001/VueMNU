<template>
  <div class="about">
    <h1>Application ToDo List</h1>
    <span>
      <h3>Spécifications générales: </h3>
    <ul>
      <li>Ajout, suppression, edition des todos</li>
      <li>Suppression multiple</li>
      <li>Filtres</li>
      <li>Un compteur de todos (globales et selectionnees)</li>
    </ul>
    </span>
   
    <span>
      <h3>Spécifications concernant les to do:</h3>
    <ul>
      <li>Un titre</li>
      <li>Un nombre d'heures estimées</li>
      <li>Un responsable (select)</li>
    </ul>
    </span>
   
    <span>
      <h3>On ne doit pas pouvoir soumettre si :</h3>
      <ul>
        <li>Un des champs est vide</li>
        <li>Le nombre d'heures n'est pas un nombre</li>
        <li>Si le responsable a deja au moins 3 taches en cours ou si la somme du nombre d'heures de ses taches depasse 10</li>
        <li>Si un de ces cas se produit, un message d'erreur doit apparaitre</li>
      </ul>
    </span>
    <p>Made with ❤️ by Mathilde Nadeau</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h1, h3 {
    margin: 10px 15px
  }
  span {
    border: rgb(255, 255, 255) 1px solid;
    border-radius: 15px;
    margin: 15px;
    padding: 15px;
  }
}
</style>
