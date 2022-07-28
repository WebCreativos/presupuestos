<template>
  <v-container>
    <v-form ref="form">
      <v-row>
        <v-col class="col-12 col-md-12">
          <h3>Editar producto</h3>
        </v-col>
        <v-col class="col-12 col-md-6">
          <v-text-field hide-details outlined :rules="rules.requerido" v-model="product.name" label="Nombre">
          </v-text-field>
        </v-col>
        <v-col class="col-12 col-md-6">
          <v-select hide-details outlined :rules="rules.requerido" v-model="product.category" label="Categoria"
            :items="['Electronica','Inmuebles','Automotores','Servicios','Bazar','Moda','Otros']"></v-select>
        </v-col>
        <v-col class="col-12 col-md-6">
          <v-select hide-details outlined :rules="rules.requerido" v-model="product.currency" label="Moneda"
            :items="['US$','$']"></v-select>
        </v-col>
        <v-col class="col-12 col-md-6" v-if="product.category!='Servicios'">
          <v-text-field hide-details outlined type="number" :rules="rules.requerido" v-model="product.price"
            label="Precio (C/U)"></v-text-field>
        </v-col>
        <v-col class="col-12 col-md-12">
          <v-textarea hide-details outlined :rules="rules.requerido" v-model="product.description" label="Descripcion">
          </v-textarea>
        </v-col>
        <v-col class="col-12">
          <dragAndDropPhotoCard v-model="pictures"></dragAndDropPhotoCard>
        </v-col>
        <v-col class="col-12">
          <div class="d-flex full-width overflow mb-3">
            <v-card v-for="(picture,index) in pictures" width="70vw" class="rounded-md mr-5" :key="index">
              <v-btn @click="deleteImg(index)" icon depressed absolute top right fab class="mt-5 mr-n7">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-img :src="previewImg(picture)" height="25vh">
              </v-img>
            </v-card>
          </div>
        </v-col>
        <v-col>
          <v-btn large block @click="createProduct()" color="primary" class="white--text rounded-lg">EDITAR PUBLICACION
          </v-btn>
        </v-col>

      </v-row>
    </v-form>
    <v-snackbar color="red" v-model="formUnfilled">
      Hay campos incompletos
    </v-snackbar>
    <v-snackbar color="success" v-model="productCreated">
      Publicacion editada con exito
    </v-snackbar>
  </v-container>
</template>


<script>
  import dragAndDropPhotoCard from '~/components/DragAndDropPhotoCard.vue'
  export default {
    components: {
      dragAndDropPhotoCard
    },
    props:{
        value:Object
    },
    layout: 'withBackButton',
    data() {
      return {
        rules: {
          requerido: [value => !!value || "Requerido."],
          email: value => {
            const pattern =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || "El mail no es valido.";
          }
        },
        idProduct: this.$route.params.id_product,
        productCreated: false,
        formUnfilled: false,
        pictures: [],
        product: (this.value!=undefined) ? this.value: {}
      }
    },
    created() {
      this.getProduct()
      this.$store.dispatch('general/setTitlePage', 'Agregar producto')
      this.$store.dispatch('general/setShowBottomBar', false)
    },
    methods: {
      previewImg(file) {
        console.log(file)
        if(file.url!=undefined){
            return file.url
        }
        return URL.createObjectURL(file)
      },
      deleteImg(index) {
        this.$delete(this.product.pictures, index)
      },
      getProduct() {
        this.$axios.get(`/announcements/${this.idProduct}/`)
          .then((data) => {
            this.product = data.data
            this.pictures = data.data.pictures
          })
      },
      createProduct() {
        if (!this.$refs.form.validate()) {
          this.formUnfilled = true
          setTimeout(() => {
            this.formUnfilled = false
          }, 3000);
        }
        this.product.user = this.$auth.user.id
        let data = new FormData()
        for (let picture in this.pictures) {
            if(this.pictures[picture].url== undefined)
                data.append('files.pictures', this.pictures[picture], this.pictures[picture].name)
        }

        data.append('data', JSON.stringify(this.product))


        this.$axios.put(`/announcements/${this.idProduct}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(() => {
          this.loading = false
          this.productCreated = true
          setTimeout(() => {
            this.$router.push('/account/user/products')
          }, 2000);
        }).catch(() => {
          this.loading = false

        })
      }
    },
    watch:{
      value(val) {
        this.product  = val
      }
    }
  }

</script>
