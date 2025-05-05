import json
import subprocess
import shutil
import os
from pprint import pprint

with open('config.json') as f:
    data = json.load(f)

# with open('tsconfig.base.json', "r") as tsconfig:
#     tsconfigData = json.load(tsconfig)
#     tsconfigData["compilerOptions"]["paths"] = {}
# 
# 
#     tsconfigData["compilerOptions"]["paths"]["@core/*"] = ["shared/core/*"]
#     tsconfigData["compilerOptions"]["paths"]["@equipment/*"] = ["libs/Equipment/src/*"]
# 
#     for lib in data["libs"]:
#         tsconfigData["compilerOptions"]["paths"]["@cmms2.0/" + lib["name"]] = ["libs/" + lib["name"] + "/" + lib["indexPath"]]
# 
# with open('tsconfig.base.json', "w") as tsconfig:
#     json.dump(tsconfigData, tsconfig, ensure_ascii=False, indent=4)

for app in data["apps"]:
    if (app["gitUrl"]):
        if os.path.exists("apps/" + app["routerPath"]):
            shutil.rmtree("apps/" + app["routerPath"])

        result = subprocess.run(["git", "clone", app["gitUrl"], "apps/" + app["routerPath"]], capture_output=True)
        if (result.returncode != 0):
            pprint(result.stderr)
            exit()

# with open("apps/cmms2.0/src/app/app.routes.ts", "w") as file:
#     file.writelines([
#        "import { Route } from '@angular/router';\n", 
#        "import { NxWelcomeComponent } from './nx-welcome.component';\n\n",
#        "export const appRoutes: Route[] = [\n",
#        "  {\n",
#        "    path: '',\n",
#        "    component: NxWelcomeComponent,\n",
#        "    pathMatch: 'full'\n",
#        "  },\n"
#     ])
# 
#     for lib in data["libs"]:
#         if 'mainComponent' in lib.keys():
#             file.writelines([
#                 "  {\n",
#                 "    title: '" + lib["name"] + "',\n",
#                 "    path: '" + lib["routerPath"] + "',\n",
#                 "    loadComponent: () =>\n",
#                 "      import('@cmms2.0/" + lib["name"] + "').then((m) => m." + lib["mainComponent"] + "),\n",
#                 "  },\n"
#             ])
#         
#         if 'mainModule' in lib.keys():
#             file.writelines([
#                 "  {\n",
#                 "    title: '" + lib["name"] + "',\n",
#                 "    path: '" + lib["routerPath"] + "',\n",
#                 "    loadChildren: () =>\n",
#                 "      import('@cmms2.0/" + lib["name"] + "').then((m) => m." + lib["mainModule"] + "),\n",
#                 "  },\n"
#             ])
#     
#     file.write("];\n")