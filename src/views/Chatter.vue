<template>
  <div class="page chatter">
    <HeaderBar displayName="Chatter" />
    <div class="card-section">
      <div>
        <Card v-if="mostActiveUser != null" cardName="Most Active User"
          :cardKey="mostActiveUser.userName"
          :cardValue="mostActiveUser.totalActivity">
        </Card>
        <Card v-if="leastActiveUser != null" cardName="Least Active User"
          :cardKey="leastActiveUser.userName"
          :cardValue="leastActiveUser.totalActivity">
        </Card>
      </div>
      <div>
        <Card v-if="mostActiveChatter != null" cardName="Most Active Chatter"
          :cardKey="mostActiveChatter.chatterName"
          :cardValue="mostActiveChatter.numOfComments">
        </Card>
        <Card v-if="leastActiveChatter != null" cardName="Least Active Chatter"
          :cardKey="leastActiveChatter.chatterName"
          :cardValue="leastActiveChatter.numOfComments">
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
import Card from '../components/Card'
import { RepositoryFactory } from '../api/repositoryFactory'
const ChatterRepository = RepositoryFactory.get('chatter');
export default {
  name: 'Chatter',

  components: {
    HeaderBar,
    Card,
  },

  data() {
    return {
      mostActiveUser: null,
      leastActiveUser: null,
      mostActiveChatter: null,
      leastActiveChatter: null,
    }
  },

  async created() {
    this.mostActiveUser = (await ChatterRepository.getMostActiveUser()).data.data;
    this.leastActiveUser = (await ChatterRepository.getLeastActiveUser()).data.data;
    this.mostActiveChatter = (await ChatterRepository.getMostActiveChatter()).data.data;
    this.leastActiveChatter = (await ChatterRepository.getMostActiveChatter()).data.data;
  },
}
</script>