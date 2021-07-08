import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendar, fingerPrint, information } from 'ionicons/icons';
import Tab1 from './pages/periodic';
import Tab2 from './pages/preferences';
import Tab3 from './pages/about';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/periodic">
            <Tab1 />
          </Route>
          <Route exact path="/preferences">
            <Tab2 />
          </Route>
          <Route path="/about">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/periodic" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/periodic">
            <IonIcon icon={calendar} />
            <IonLabel>Periodic Calendar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/preferences">
            <IonIcon icon={fingerPrint} />
            <IonLabel>Preferences</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/about">
            <IonIcon icon={information} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
