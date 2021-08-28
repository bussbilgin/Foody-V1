<template>
  <div class="container">
    <form @submit.prevent="Search()" class="search-box">
      <input
        type="text"
        placeholder="What do you want to eat?"
        v-model="term"
      />
      <input type="text" placeholder="Where?" v-model="location" />
      <input type="submit" value="Search" />
    </form>
  </div>

  <section class="container">
    <div class="business-cards">
      <h2>businesses near you</h2>
      <div class="business-card">
        <router-link
          :to="'/detail/' + business.id"
          class="business"
          v-for="business in searchResults"
          :key="business.id"
        >
          <figure class="business__image">
            <img
              :src="
                business.image_url !== ''
                  ? business.image_url
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'
              "
              alt="Item Photo"
            />
          </figure>
          <div class="business__information">
            <p class="business__header">{{ business.name }}</p>
            <div class="business__review">
              <p class="business__review-rating">{{ business.rating }} Star</p>
              <p class="business__review-count">
                {{ business.review_count }} Yorum
              </p>
            </div>
            <!-- <p class="business__category">{{ business.categories[0].title }}</p> -->
            <div class="business__address">
              <p>{{ business.location.address1 }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import env from "@/env.js";

export default {
  setup() {
    const term = ref("");
    const location = ref("");
    const searchResults = ref({});

    const Search = () => {
      if (term.value != "" && location.value != "") {
        fetch(
          `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term.value}&location=${location.value}&sort_by=best_match&locale=tr_TR`,
          {
            headers: {
              Authorization: `Bearer ${env.apiKey}`,
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            searchResults.value = data.businesses;
            console.log(searchResults.value);
          });
      } else {
        alert("Arama yapmadan önce gerekli alanları doldurunuz.");
      }
    };

    return {
      term,
      location,
      Search,
      searchResults,
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  margin-bottom: 20px;
}
.search-box {
  padding-top: 10px;
  padding-right: 30px;
  padding-bottom: 20px;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.search-box input {
  margin-right: 15px;
  display: block;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.search-box input[type="text"] {
  width: 100%;
  max-width: 1000px;
  font-size: 18px;
  text-overflow: ellipsis;
  padding: 10px 16px;
  border-radius: 8px;
  transition: 0.4s;
  color: #fff;
  background-color: #212121;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 15px;
  }
}

.search-box input::placeholder {
  color: #e7e7e7;
}

.search-box input:focus {
  box-shadow: 8px 3px 6px #00000033;
}

.search-box input[type="submit"] {
  width: 100%;
  max-width: 100px;
  padding: 10px 16px;
  font-size: 18px;
  text-overflow: ellipsis;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.4s;
  color: #e7e7e7;
  background-color: #212121;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 15px;
  }
}
.search-box input:active {
  background-color: #272727;
}

section .container {
  margin-bottom: 40px;
}

.business-cards {
  h2 {
    text-align: center;
    text-transform: uppercase;
    padding: 10px;
    margin-bottom: 20px;
    border-bottom: 2px solid #ff944d;
  }
}

.business-card {
  display: flex;
  flex-wrap: wrap;
}

.business {
  max-width: 25%;
  flex: 1 1 25%;
  padding: 20px 15px;

  @media (max-width: 1024px) {
    max-width: 33%;
    flex: 1 1 33%;
  }

  @media (max-width: 767px) {
    max-width: 50%;
    flex: 1 1 50%;
  }

  &__image {
    position: relative;
    height: 200px;
    margin-bottom: 8px;
    display: block;
    box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1);

    @media (max-width: 1024px) {
      height: 150px;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
      max-height: 200px;
      object-fit: cover;
      border-radius: 8px 8px 0px 0px;

      @media (max-width: 1024px) {
        max-height: 150px;
      }
    }
  }

  &__information {
    height: 140px;
    border-radius: 0px 0px 8px 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #212121;
    box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.3);

    @media (max-width: 1024px) {
      height: 120px;
    }
  }

  &__header {
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    margin-top: 4px;
    margin-bottom: 8px;
    font-weight: bold;
    color: #ffffff;

    @media (max-width: 1024px) {
      font-size: 14px;
    }

    @media (max-width: 767px) {
      font-size: 13px;
    }
  }

  &__review {
    font-size: 14px;
    margin-bottom: 4px;
    display: flex;
    justify-content: center;
    color: #ffffff;

    &-rating {
      margin-right: 15px;
    }

    @media (max-width: 1024px) {
      font-size: 13px;
    }

    @media (max-width: 767px) {
      font-size: 13px;
    }
  }

  // &__category {
  //   font-size: 14px;
  //   text-align: center;
  //   margin-bottom: 8px;
  //   color: #ffffff;
  // }

  &__address {
    font-size: 14px;
    text-align: center;
    margin-bottom: 8px;
    color: #ffffff;

    @media (max-width: 1024px) {
      font-size: 13px;
    }

    @media (max-width: 767px) {
      font-size: 13px;
    }
  }
}
</style>
