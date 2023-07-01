<script setup lang="ts"></script>

<style scoped lang="scss">
.navbar-filtro {
  background: #333;
  color: white;
  height: 60px;
}

.form-filtro {
  display: flex;
  height: 100%;
  gap: 16px;
  justify-content: center;
  align-items: center;
}

.form-select {
  display: block;
  width: 15%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #171717;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.form-select:focus {
  border-color: #0078d4;
  outline: 0;
  -webkit-box-shadow: 0 0 0 0.25rem rgba(0, 120, 212, 0.25);
  box-shadow: 0 0 0 0.25rem rgba(0, 120, 212, 0.25);
}

.btn-filtro {
  width: 15%;
  font-weight: 500;
  padding: 10px 0;
  color: #fff;
  background-color: #0078d4;
  border-color: #0078d4;
  box-sizing: border-box;
  text-align: center;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: transparent;
  border-width: 1px;
  border-style: solid;
  -o-border-image: initial;
  border-image: initial;
  text-decoration: none;
  border-radius: 2px;
  text-overflow: ellipsis;
  text-transform: none;
  font-size: 0.875rem;
  line-height: 1.3;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
}

.btn-filtro:hover {
  background-color: #0062ae;
  border-color: #0062ae;
}
.btn-filtro:active {
  background-color: #003e6e;
  border-color: #003e6e;
}
</style>

<template>
  <!-- Navbar -->
  <nav class="navbar-filtro">
    <form class="form-filtro" novalidate>
      <select class="form-select" required>
        <option value="">AÑO</option>
        <option>2001</option>
        <option>2000</option>
        <option>1999</option>
        <option>1998</option>
      </select>

      <select class="form-select">
        <option value="">MARCA</option>
        <option>SUBARU</option>
      </select>

      <select class="form-select" >
        <option value="">MODELO</option>
        <option>IMPREZA</option>
      </select>

      <select class="form-select">
        <option value="">MOTOR</option>
        <option>1.6 L</option>
      </select>

      <button class="btn-filtro" type="button">BUSCAR</button>
    </form>
  </nav>
</template>
