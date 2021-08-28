<template>
  <div class="container">
    <div class="business">
      <figure class="business__image">
        <img
          :src="
            business?.image_url !== ''
              ? business?.image_url
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'
          "
          alt="Item Photo"
        />
      </figure>
      <div class="business__information">
        <p class="business__header">{{ business?.name }}</p>
        <div class="business__review">
          <p class="business__review-rating">{{ business.rating }} Star</p>
          <p class="business__review-count">
            {{ business?.review_count }} Yorum
          </p>
        </div>

        <div class="business__address">
          <p>
            {{ business?.location.address1 + business?.location.address2 }}
          </p>
          <a href="tel:{{business.phone}}">{{ business.phone }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";

export default {
  setup() {
    const match = ref({});
    const route = useRoute();
    const business = ref({});

    onBeforeMount(() => {
      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${route.params.id}?locale=tr_TR`,
        {
          headers: {
            Authorization: `Bearer ${env.apiKey}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          business.value = data;
          console.log(business.value);
        });
    });

    return {
      match,
      route,
      business,
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 160px;
  margin-bottom: 50px;
}

.business {
  &__image {
    position: relative;
    margin-bottom: 20px;
    display: block;
    box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1);

    img {
      display: block;
      width: 100%;
      height: auto;
      max-height: 400px;
      object-fit: cover;
      border-radius: 8px 8px 0px 0px;
    }
  }

  &__information {
    height: 140px;
    border-radius: 0px 0px 8px 8px;
    background-color: #212121;
    box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.3);
  }

  &__header {
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 15px;
    font-weight: bold;
    color: #ffffff;

    @media (max-width: 1024px) {
      font-size: 18px;
    }

    @media (max-width: 767px) {
      font-size: 15px;
    }
  }

  &__review {
    font-size: 14px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    color: #ffffff;

    &-rating {
      margin-right: 15px;
    }
  }

  &__address {
    font-size: 15px;
    text-align: center;
    margin-bottom: 8px;
    color: #ffffff;

    p {
      margin-bottom: 5px;
    }

    a {
      color: #e7e7e7;
    }

    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
}
</style>
