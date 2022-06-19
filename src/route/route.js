import RouteComponent from "../view/_common/component/RouteComponent"

import {PERMISSON_ALL, PERMISSON_LOGIN} from "../constant/permission"
import {DEFAULT_TITLE, DEFAULT_DESCRIPTION} from "../constant/seo"
import ContainerHome from "../view/main/ContainerHome"

export const route = [
  {
    path: "/",
    component: (
      <RouteComponent
        permission={PERMISSON_LOGIN}
        component={ContainerHome}
        title={DEFAULT_TITLE}
        description={DEFAULT_DESCRIPTION}
      />
    ),
  },
]
