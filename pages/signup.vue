<template>
  <div class="h-screen grid place-items-center">
    <div>
      <img class="w-96 mx-3" src="/img/Logo_with_icon.png" />
      <div
        class="flex justify-center items-center gap-x-3 bg-white mt-5 rounded-lg"
      >
        <div>
          <i class="fa-solid fa-user fa-xl ml-2"></i>
          <!-- <i class="fa-regular fa-user "></i> -->
        </div>
        <input
          class="bg-white justify-center flex h-12 w-full rounded-lg outline-none ml-1"
          type="text"
          placeholder="USER NAME"
          required
        />
      </div>

      <div
        class="flex justify-center items-center gap-x-3 bg-white mt-5 rounded-lg"
      >
        <div>
          <i class="fa-solid fa-envelope fa-xl ml-2"></i>
        </div>
        <input
          class="bg-white justify-center flex h-12 w-full rounded-lg outline-none ml-1"
          type="text"
          placeholder="E-MAIL"
          required
        />
      </div>

      <div
        class="flex justify-center items-center gap-x-3 bg-white mt-5 rounded-lg"
      >
        <div>
          <i class="fa-solid fa-lock fa-lg ml-3"></i>
          <img class="w-8" src="" alt="" />
        </div>
        <input
          class="bg-white justify-center flex h-12 w-full rounded-lg outline-none ml-1"
          type="password"
          placeholder="PASSWORD"
          required
        />
      </div>

      <div
        class="flex justify-center items-center gap-x-3 bg-white mt-5 rounded-lg"
      >
        <div>
          <i class="fa-solid fa-key fa-lg ml-3"></i>
          <img class="w-8" src="" alt="" />
        </div>
        <input
          class="bg-white justify-center flex h-12 w-full rounded-lg outline-none ml-1"
          type="password"
          placeholder="CONFIRM PASSWORD"
          required
        />
      </div>

      <div>
        <select class="bg-white h-12 rounded-lg mt-5 w-32" name="day" id="day">
          <option>DAY</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <select class="bg-white h-12 rounded-lg mt-5 ml-3 w-32" name="month">
          <option>MONTH</option>
          <option value="january">JANUARY</option>
          <option value="february">FEBRUARY</option>
          <option value="march">MARCH</option>
          <option value="april">APRIL</option>
          <option value="may">MAY</option>
          <option value="june">JUNE</option>
          <option value="july">JULY</option>
          <option value="august">AUGUST</option>
          <option value="september">SEPTEMBER</option>
          <option value="october">OCTOBER</option>
          <option value="november">NOVEMBER</option>
          <option value="december">DECEMBER</option>
        </select>
        <select class="bg-white h-12 rounded-lg mt-5 ml-3 w-32" name="year">
          <option>YEAR</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>

      <div class="justify-center flex">
        <button
          type="submit"
          class="btn bg-primary text-2xl rounded-full w-64 text-white mt-5"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
