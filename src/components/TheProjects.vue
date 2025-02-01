<script setup lang="ts">
import projects from '@/datas/projects.json';
</script>

<template>
  <TheSection id="projects" label="PROJECTS" bg-color="light">
    <table class="table table-striped table-bordered">
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>
            <h5>{{ project.name }} | {{ project.role }}</h5>
            <h6>{{ project.company }} | {{ project.time }}</h6>
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
