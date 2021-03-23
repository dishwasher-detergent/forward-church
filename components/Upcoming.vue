<template>
  <div class="w-full bg-red-400">
    <div class="max-w-5xl mx-auto p-5 md:px-0">
      <h1 class="text-2xl display-font text-white">Upcoming Events</h1>
      <div class="p-5 bg-gray-900 bg-opacity-10 rounded">
        <flicking
          :options="{
			gap:10,
            moveType: 'snap',
            hanger: 0,
            anchor: 0,
          }"
          :tag="'div'"
          :viewportTag="'div'"
          :cameraTag="'div'"
        >
          <Event
            event="Easter Sunday"
            date="3/4/2020"
            from="12:00 AM"
            to="3:00 PM"
            where="Yukon Park"
          />
          <Event
            event="Easter Sunday"
            date="3/4/2020"
            from="12:00 AM"
            to="3:00 PM"
            where="Yukon Park"
          />
          <Event
            event="Easter Sunday"
            date="3/4/2020"
            from="12:00 AM"
            to="3:00 PM"
            where="Yukon Park"
          />
          <Event
            event="Easter Sunday"
            date="3/4/2020"
            from="12:00 AM"
            to="3:00 PM"
            where="Yukon Park"
          />
          <Event
            event="Easter Sunday"
            date="3/4/2020"
            from="12:00 AM"
            to="3:00 PM"
            where="Yukon Park"
          />
          <Event
            event="Easter Sunday"
            date="3/4/2020"
            from="12:00 AM"
            to="3:00 PM"
            where="Yukon Park"
          />
        </flicking>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  method: {
    next() {},
  },
};
</script>