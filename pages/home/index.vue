<template>
<div>
  <ul class="flex border-b">
    <li class="-mb-px mr-1">
      <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="#">Kunder</a>
    </li>
    <li class="mr-1">
      <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Produkt</a>
    </li>
    <li class="mr-1">
      <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Fabrikant</a>
    </li>
    <li class="mr-1">
      <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Orders</a>
    </li>
  </ul>


  <!--Table-->
  <table>
    <tr>
      <th>ID</th>
      <th>Navn</th>
      <th>By</th>
      <th>Vej</th>
      <th>Land</th>
      <th>Etage</th>
      <th>Rediger</th>
      <th>Slet</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Alfreds Futterkiste</td>
      <td>Odense</td>
      <td>Jordbærvænget 17</td>
      <td>Germany</td>
      <td>Villa</td>
      <td>Rediger</td>
      <td>Slet</td>
    </tr>
    <tr>
      <td>2</td>
      <td>kasper yong</td>
      <td>Vissenbjerg</td>
      <td>Freeway 1,1</td>
      <td>Denmark</td>
      <td>1 th</td>
      <td>Rediger</td>
      <td>Slet</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Frederik Rask</td>
      <td>Bred</td>
      <td>Mejerivej 2,1</td>
      <td>Denmark</td>
      <td>3 tv</td>
      <td>Rediger</td>
      <td>Slet</td>
    </tr>
  </table>
</div>
</template>


<script>
export default {
  head(){
   return{
     title: 'Administrator',
   }
  }
}
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
