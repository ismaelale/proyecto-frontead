<script setup>
import { ref } from 'vue'

const vistaActual = ref('customers');



</script>

<template>
  <div class="contenedor-principal text-white  flex min-h-screen">
    <aside class="menu-lateral w-64 text-white flex-shrink-0">
        <h3 class="text-center pt-10">DASHBOARD</h3>
        <nav class="p-10">
            <ul class="flex flex-col gap-10">
                <li>
                    <a @click.prevent="vistaActual = 'customers'" data-vista="customers" class="links cursor-pointer">Customer Regitration</a>
                </li>
                <li>
                    <a @click.prevent="vistaActual = 'panel'" data-vista="panel" class="links cursor-pointer">Panel Control</a>
                </li>
            </ul>
        </nav>
    </aside>

    <main class="flex-1 p-0">
        <section v-show="vistaActual === 'customers'" class="n-views" id="customers">
            <header class="text-center">
                <h1 class="text-5xl mt-5">Customer Regitration</h1>
            </header>
            <div>
                 <h2 class="p-2 ml-10 text-2xl">Personal Data</h2>
                 <div class="p-2 div-request grid grid-cols-3 mx-9 rounded-md">
                    <section class="flex flex-col items-center gap-2">
                        <label for="name">Nombre Completo</label>
                        <input id="name" type="text" placeholder="Ingrese Nombre Completo">
                    </section>
                    <section class="flex flex-col items-center gap-2">
                        <label for="vehicle">Type Vehicle</label>
                        <input id="vehicle" type="text" placeholder="Enter Vehicle Type">
                    </section>
                    <section class="flex flex-col items-center gap-2">
                        <label for="">Request Service</label>
                        <select name="service" id="req-service" class="">
                            <option value="sel-option">Select option...</option>
                            <option value="maintenance">Manintenance</option>
                            <option value="oil-change">Oil Change</option>
                            <option value="repair">Repair</option>
                        </select>
                    </section>
                    <section class="flex flex-col items-center gap-2">
                        <label for="">Nombre Completo</label>
                        <input type="text" placeholder="Ingrese Nombre Completo">
                    </section>
                    <section class="flex flex-col items-center gap-2">
                        <label for="">Nombre Completo</label>
                        <input type="text" placeholder="Ingrese Nombre Completo">
                    </section>
                    <section class="flex flex-col items-center gap-2">
                        <label for="">Nombre Completo</label>
                        <input type="text" placeholder="Ingrese Nombre Completo">
                    </section>
                 </div>               
            </div>
        </section>
        
        <section v-show="vistaActual === 'panel'" class="n-views" id="panel">
            <header>
                <h2 class="text-5xl text-center mt-5">Panel Control</h2>
            </header>
            <div>
                <h3 class="text-3xl ml-20 mt-10">List</h3>
                <div class="listado">
                    <ul class="lista">
                      
                    </ul>
                </div>
            </div>
        </section>
    </main>
</div>   
</template>