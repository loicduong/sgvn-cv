<script setup lang="ts">
import TheSection from './TheSection.vue';
</script>

<template>
  <TheSection label="CONTACT" class="stg-footer" white>
    <div class="row">
      <div class="col-12 col-md-6">
        <table cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <th class="r_2"><span class="pc">Email</span></th>
              <td>:</td>
              <td class="r_2" colspan="3">dploc96@gmail.com</td>
            </tr>
            <tr>
              <th class="r_2"><span class="pc">Phone</span></th>
              <td>:</td>
              <td class="r_2">+84(0)842575139</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-12 col-md-6">
        <table cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <th class="r_2"><span class="pc">Portfolio</span></th>
              <td>:</td>
              <td class="r_2"><a href="https://loicduong.vercel.app">https://loicduong.vercel.app</a></td>
            </tr>
            <tr>
              <th class="r_2"><span class="pc">Linkedin</span></th>
              <td>:</td>
              <td class="r_2"><a href="https://www.linkedin.com/in/loicduong">https://www.linkedin.com/in/loicduong</a>
              </td>
            </tr>
            <tr>
              <th class="r_2"><span class="pc">Github</span></th>
              <td>:</td>
              <td class="r_2"><a href="https://github.com/loicduong">https://github.com/loicduong</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </TheSection>
  <!-- <footer class="stg-footer">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <table cellpadding="0" cellspacing="0">
            <tbody>
              <tr>
                <th class="r_2"><span class="pc">Email</span></th>
                <td>:</td>
                <td class="r_2" colspan="3">dploc96@gmail.com</td>
              </tr>
              <tr>
                <th class="r_2"><span class="pc">Phone</span></th>
                <td>:</td>
                <td class="r_2">+84(0)842575139</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-6">
          <table cellpadding="0" cellspacing="0">
            <tbody>
              <tr>
                <th class="r_2"><span class="pc">Portfolio</span></th>
                <td>:</td>
                <td class="r_2"><a href="https://loicduong.vercel.app">https://loicduong.vercel.app</a></td>
              </tr>
              <tr>
                <th class="r_2"><span class="pc">Linkedin</span></th>
                <td>:</td>
                <td class="r_2"><a
                    href="https://www.linkedin.com/in/loicduong">https://www.linkedin.com/in/loicduong</a></td>
              </tr>
              <tr>
                <th class="r_2"><span class="pc">Github</span></th>
                <td>:</td>
                <td class="r_2"><a href="https://github.com/loicduong">https://github.com/loicduong</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="f_icon">
      <p>Copyright ©2025 Duong Phuoc Loc</p>
    </div>
  </footer> -->
</template>

<style scoped>
.stg-footer {
  background-color: #00295B;
}

td,
th {
  padding: 2px 8px 0 8px;
  color: #fff;
  font-size: 14px;
}

th {
  padding-left: 0;
}

th {
  font-weight: 500;
}

tr:nth-child(n) td,
tr:nth-child(n) th {
  padding-top: 15px;
}
</style>
