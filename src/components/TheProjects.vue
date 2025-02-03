<script setup lang="ts">
import projects from '@/datas/projects.json';
</script>

<template>
  <TheSection id="projects" label="PROJECTS" bg-color="light">
    <table class="table table-striped table-bordered">
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>
            <h5>
              <span><a :href="project.url" target="_blank">{{ project.name }}</a></span> | <span>{{
                project.role }}</span>
            </h5>
            <h6><span><a :href="project.companyUrl" target="_blank">{{ project.company }}</a></span> | <span>{{
              project.time }}</span></h6>
            <ul>
              <li>Description: {{ project.description }}</li>
              <li>Tech Stack: {{ project.techStack }}</li>
              <li>Team size: {{ project.teamSize }}</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </TheSection>
</template>

<style scoped></style>
