<script setup>
import { ref } from 'vue'

const vistaActual = ref('ventas');



</script>

<template>
  <div class="contenedor-principal text-white  flex min-h-screen">
    <aside class="menu-lateral w-64 text-white flex-shrink-0">
        <h3 class="text-center pt-10">DASHBOARD</h3>
        <nav class="p-10">
            <ul class="links-enlaces text-center flex flex-col gap-10">
                <li>
                    <a @click.prevent="vistaActual = 'ventas'" data-vista="ventas" class="links cursor-pointer">Registrar Venta</a>
                </li>
                <li>
                    <a @click.prevent="vistaActual = 'productos'" data-vista="productos" class="links cursor-pointer">Productos</a>
                </li>
                <li>
                    <a @click.prevent="vistaActual = 'clientes'" data-vista="clientes" class="links cursor-pointer">Clientes</a>
                </li>
                <li>
                    <a @click.prevent="vistaActual = 'usuarios'" data-vista="usuarios" class="links cursor-pointer">Usuarios</a>
                </li>
            </ul>
        </nav>
    </aside>

    <main class="flex-1 p-0">
        <section v-show="vistaActual === 'ventas'" class="n-views" id="ventas">
            <header class="text-center">
                <h1 class="text-5xl mt-5">Venta</h1>
            </header>
            <div>
                <h2 class="p-2 ml-10 text-2xl">Registrar Venta</h2>
                <div class="p-2 div-request grid grid-cols-3 mx-9 rounded-md">
                    <section class="flex flex-col items-center gap-2">
                        <label for="name">Fecha Actual</label>
                        <input id="name" type="date" placeholder="Ingrese Nombre Completo">
                    </section>

                    <section class="flex flex-col items-center gap-2">
                        <label for="">Producto</label>
                        <select name="productos" id="list-productos" class="">
                            <option value="sel-option">Select option...</option>
                        </select>
                    </section>

                    <section class="flex flex-col items-center gap-2">
                        <label for="">Precio Producto</label>
                        <input type="text" placeholder="Ingrese Nombre Completo">
                    </section>

                    <section class="flex flex-col items-center gap-2">
                        <label for="">Cantidad a Comprar</label>
                        <input type="text" placeholder="Ingrese Nombre Completo">
                    </section>

                    <section class="flex flex-col items-center gap-2">
                        <label for="">Nombre Cliente</label>
                       <select name="cliente" id="list-clientes" class="">
                            <option value="sel-option">Select option...</option>
                        </select>
                    </section>
                </div>               
            </div>
        </section>
        
        <section v-show="vistaActual === 'productos'" class="n-views" id="productos">
            <header>
                <h2 class="text-5xl text-center mt-5">Productos</h2>
            </header>
            <div>
                <h2 class="p-2 ml-10 text-2xl">Registrar Productos</h2>
                <div class="p-2 div-request grid grid-cols-3 mx-9 rounded-md">
                    <section class="flex flex-col items-center gap-2">
                        <label for="name">Nombre Producto</label>
                        <input id="name" type="text" placeholder="Ingrese Nombre Producto">
                    </section>
                    <section class="flex flex-col items-center gap-2">
                        <label for="precio">Precio</label>
                        <input id="precio" type="text" placeholder="Ingrese el Precio">
                    </section>
                    <section class="flex flex-col items-center gap-2">
                        <label for="">Stock en Existencia</label>
                        <input type="text" placeholder="Ingrese el Stock existente">
                    </section>
                </div>               
            </div>
        </section>

        <section v-show="vistaActual === 'clientes'" class="n-views" id="clientes">
            <header>
                <h2 class="text-5xl text-center mt-5">Clientes</h2>
            </header>
            <div>
                <h2 class="p-2 ml-10 text-2xl">Registrar Cliente</h2>
                <div class="p-2 div-request grid grid-cols-3 mx-9 rounded-md">
                    <section class="flex flex-col items-center gap-2">
                        <label for="name">Nombre Cliente</label>
                        <input id="name" type="text" placeholder="Ingrese Nombre-Apellido">
                    </section>
                    <section class="flex flex-col items-center gap-2">
                        <label for="vehicle">Rtn o Identidad</label>
                        <input id="vehicle" type="text" placeholder="Ingrese su RTN - Identidad">
                    </section>
                    
                </div>               
            </div>
        </section>
        
        <section v-show="vistaActual === 'usuarios'" class="n-views" id="usuarios">
            <header>
                <h2 class="text-5xl text-center mt-5">Usuarios</h2>
            </header>
            <div>
                <h2 class="p-2 ml-10 text-2xl">Registrar Usuario</h2>
                <div class="p-2 div-request grid grid-cols-3 mx-9 rounded-md">

                    <section class="flex flex-col items-center gap-2">
                        <label for="name">Nombre Completo</label>
                        <input id="name" type="text" placeholder="Ingrese Nombre-Apellido">
                    </section>
                    <section class="flex flex-col items-center gap-2">
                        <label for="vehicle">Nombre Usuario</label>
                        <input id="vehicle" type="text" placeholder="Ingrese un nombre de usuario">
                    </section>
                    <section class="flex flex-col items-center gap-2">
                        <label for="">Contreña</label>
                        <input type="password" placeholder="Ingrese una Contraseña">
                    </section>
                </div>        
                <div>
                    <h2 class="p-2 mt-8 ml-10 text-2xl">Lista Usuarios</h2>
                    <div class="listado-usuarios flex p-2 ml-10">
                        <ul>
                            
                        </ul>
                    </div>
                </div>       
            </div>
        </section>
    </main>
</div>   
</template>