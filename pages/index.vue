<template>
  <Navbar />
  <div class="z-1 mb-14 max-w-screen-xl m-auto pt-2 px-5 max-sm:mb-6">
    <div class="flex flex-col gap-3">
      <h1 class="text-3xl font-semibold text-primary">HotHit</h1>
      <CardTop />
      <h1 class="text-3xl font-bold text-primary">Recommend</h1>
      <div class="flex gap-3 max-sm:flex-wrap justify-center">
        <CardSong
          class="sm:w-1/3"
          text="พี่ชอบหนูที่สุดเลย"
          image="img/card/PhiChopNu.png"
        />
        <CardSong class="sm:w-1/3" text="ฟ้ารักพ่อ" image="img/card/DILF.png" />
        <CardSong
          class="sm:w-1/3"
          text="มาแตร์เดอี"
          image="img/card/Materdei.png"
        />
      </div>
      <div class="grid grid-cols-2 gap-2 max-md:grid-cols-1">
        <CardBoard />
        <div class="flex flex-col gap-3">
          <CardWithtopic
            topic="HYBS ประกาศยุบวง นี่คือเพลงที่เราจะคิดถึงทุกครั้งที่ฟัง"
            image="/img/playlist/hybs.jpeg"
          />
          <CardWithtopic
            topic="ส่งเพลงจีบทุกวัน อยากเป็นแค่เพื่อนแกมั้ง"
            image="/img/playlist/love.png"
          />
          <CardWithtopic
            topic="ไม่มีหรอกเพลงคลั่งรัก มีแต่คนที่คลั่งน้ำตา"
            image="/img/playlist/sad.png"
          />
        </div>
      </div>
    </div>
  </div>
  <Foot />
</template>
