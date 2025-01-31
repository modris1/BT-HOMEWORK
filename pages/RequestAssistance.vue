<template>
  <Title>Request assistance</Title>
  <div class="flex flex-col gap-12
              md:gap-6">
    <div>
      <div class="p-5 pr-[30px] flex flex-col gap-6
                  md:p-0">
        <h1>Request assistance from us</h1>
        <p class="font-light text-lg/7 text-balance text-brand-blue
                  md:text-xl/7">Providing assistance to passengers with reduced mobility is part of
          our service at airBaltic.</p>
        <div class="flex flex-col gap-3">
          <h2>We can help you:</h2>
          <ul class="md:grid md:grid-cols-2">
            <li>Get to the aircraft</li>
            <li>Board the aircraft</li>
            <li>Move around the aircraft cabin if required</li>
            <li>Disembark the aircraft</li>
            <li>Transfer between flights</li>
          </ul>
        </div>
      </div>
      <div class="md:pt-6 md:flex md:gap-5">
        <div class="alert-box bg-alert-info">Personal mobility equipment and guide dogs are carried free of charge.
        </div>
        <div class="alert-box bg-alert-warning">Please note, we are unable to provide eating assistance and medical
          services.</div>
      </div>
    </div>
    <div>
      <AssistanceForm />
    </div>
  </div>
</template>

<style scoped>
h2 {
  @apply font-medium text-base/5 text-brand-blue;
}

ul>li {
  @apply font-normal text-sm/8 text-brand-blue whitespace-nowrap;
}

ul>li:before {
  @apply content-[""] mr-3 rounded-full inline-block align-middle w-[6px] h-[6px] bg-brand-green;
}

.alert-box {
  @apply p-6 text-center font-normal text-sm/6 text-brand-blue md:p-4 md:rounded-sm;
}
</style>