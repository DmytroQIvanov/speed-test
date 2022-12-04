import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
import Dots from "./dots";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Svg from "./svg";
import Canvas from "./canvas";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat id porta nibh venenatis cras sed felis eget. Habitasse platea dictumst vestibulum rhoncus est. Mi eget mauris pharetra et ultrices. Orci sagittis eu volutpat odio facilisis. In hendrerit gravida rutrum quisque. In ornare quam viverra orci sagittis eu volutpat odio. A cras semper auctor neque vitae. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Elementum sagittis vitae et leo duis ut diam. Dui vivamus arcu felis bibendum ut tristique et. Lobortis mattis aliquam faucibus purus. Sapien pellentesque habitant morbi tristique. In hac habitasse platea dictumst vestibulum. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Interdum consectetur libero id faucibus nisl. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Vitae et leo duis ut.\n" +
  "\n" +
  "Cursus vitae congue mauris rhoncus aenean vel elit. Dignissim convallis aenean et tortor at risus viverra adipiscing. Massa vitae tortor condimentum lacinia quis vel eros. Dui accumsan sit amet nulla facilisi morbi tempus. Bibendum est ultricies integer quis. Congue quisque egestas diam in. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tellus in hac habitasse platea. Purus sit amet volutpat consequat mauris. Vel eros donec ac odio tempor orci dapibus ultrices. Feugiat sed lectus vestibulum mattis ullamcorper velit. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Morbi tristique senectus et netus et. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Est placerat in egestas erat imperdiet sed euismod nisi. Lectus sit amet est placerat in egestas erat. Maecenas pharetra convallis posuere morbi leo urna molestie. Rhoncus aenean vel elit scelerisque mauris. Porttitor massa id neque aliquam vestibulum.\n" +
  "\n" +
  "Et malesuada fames ac turpis egestas sed tempus urna. Eget gravida cum sociis natoque penatibus et magnis. Viverra suspendisse potenti nullam ac tortor vitae purus. Id nibh tortor id aliquet. Mi proin sed libero enim. Purus gravida quis blandit turpis cursus in hac. Quisque id diam vel quam elementum pulvinar etiam non. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Tortor id aliquet lectus proin nibh nisl condimentum id. Nullam ac tortor vitae purus faucibus ornare. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.\n" +
  "\n" +
  "Id consectetur purus ut faucibus. Pulvinar mattis nunc sed blandit libero. Enim lobortis scelerisque fermentum dui faucibus in. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Duis at consectetur lorem donec massa sapien faucibus et. Consectetur adipiscing elit pellentesque habitant. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Et magnis dis parturient montes nascetur ridiculus mus. Vitae et leo duis ut diam quam nulla porttitor massa. Quis varius quam quisque id diam vel. Euismod quis viverra nibh cras pulvinar. Habitant morbi tristique senectus et netus. Neque volutpat ac tincidunt vitae semper. Vitae tortor condimentum lacinia quis vel. Mi proin sed libero enim sed faucibus turpis in. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Viverra justo nec ultrices dui sapien eget. Lectus mauris ultrices eros in cursus turpis. Diam ut venenatis tellus in metus vulputate eu.\n" +
  "\n" +
  "Amet dictum sit amet justo donec enim diam vulputate. Morbi non arcu risus quis varius quam quisque id. Viverra justo nec ultrices dui sapien eget mi proin sed. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Faucibus ornare suspendisse sed nisi lacus sed viverra. Nam libero justo laoreet sit amet. Ut sem nulla pharetra diam. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Praesent tristique magna sit amet. Et leo duis ut diam quam nulla porttitor. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. At elementum eu facilisis sed odio. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Felis bibendum ut tristique et egestas.\n" +
  "\n" +
  "Sit amet facilisis magna etiam. Morbi non arcu risus quis varius quam quisque id. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Placerat orci nulla pellentesque dignissim enim. Eget sit amet tellus cras adipiscing enim eu turpis. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Vitae tortor condimentum lacinia quis vel eros donec ac. Vel pretium lectus quam id leo in vitae turpis. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Amet nisl suscipit adipiscing bibendum est. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat nam. Vulputate ut pharetra sit amet. Amet commodo nulla facilisi nullam. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum.\n" +
  "\n" +
  "Donec ultrices tincidunt arcu non sodales neque sodales. Maecenas sed enim ut sem viverra aliquet eget sit. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Urna duis convallis convallis tellus id interdum. Ac tortor dignissim convallis aenean et tortor at. Iaculis eu non diam phasellus vestibulum. Metus dictum at tempor commodo ullamcorper a. Turpis nunc eget lorem dolor sed. Et ligula ullamcorper malesuada proin. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Quis vel eros donec ac odio tempor orci dapibus ultrices. Consequat nisl vel pretium lectus. Nullam non nisi est sit amet.\n" +
  "\n" +
  "Enim ut sem viverra aliquet eget sit amet tellus cras. Aliquam nulla facilisi cras fermentum. Urna neque viverra justo nec ultrices dui sapien. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Aliquam purus sit amet luctus venenatis lectus magna. Sit amet nisl purus in mollis nunc. Sit amet venenatis urna cursus eget. Elementum tempus egestas sed sed risus pretium quam vulputate. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Iaculis nunc sed augue lacus viverra vitae congue eu.\n" +
  "\n" +
  "Nisl condimentum id venenatis a condimentum. Eget aliquet nibh praesent tristique magna sit amet. Tellus molestie nunc non blandit massa enim nec. Nibh mauris cursus mattis molestie a. Cras fermentum odio eu feugiat pretium nibh. Id diam maecenas ultricies mi eget mauris pharetra. Enim diam vulputate ut pharetra sit amet. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Et leo duis ut diam. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Non nisi est sit amet facilisis.\n" +
  "\n" +
  "Odio ut enim blandit volutpat maecenas volutpat blandit. Cras pulvinar mattis nunc sed blandit libero volutpat. Nisl nisi scelerisque eu ultrices. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Amet tellus cras adipiscing enim. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Nibh sit amet commodo nulla facilisi nullam vehicula. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Nisl purus in mollis nunc. Habitant morbi tristique senectus et netus et malesuada. Tristique senectus et netus et malesuada fames. Dignissim sodales ut eu sem integer. Nibh praesent tristique magna sit amet purus.\n" +
  "\n" +
  "In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Duis ut diam quam nulla porttitor. Vitae auctor eu augue ut lectus arcu bibendum. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Senectus et netus et malesuada fames. Non sodales neque sodales ut etiam. Egestas egestas fringilla phasellus faucibus. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. Mauris commodo quis imperdiet massa tincidunt. Netus et malesuada fames ac turpis egestas. Augue interdum velit euismod in. Scelerisque felis imperdiet proin fermentum leo vel. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Scelerisque purus semper eget duis at tellus at urna condimentum. Auctor urna nunc id cursus metus aliquam eleifend.\n" +
  "\n" +
  "Facilisis volutpat est velit egestas dui id. Diam volutpat commodo sed egestas egestas fringilla phasellus. Purus ut faucibus pulvinar elementum integer. Duis convallis convallis tellus id. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Sit amet nisl purus in. Magna ac placerat vestibulum lectus mauris ultrices eros. At risus viverra adipiscing at. Porta nibh venenatis cras sed felis. Enim sed faucibus turpis in eu. Sed odio morbi quis commodo. Ipsum a arcu cursus vitae. Mauris pharetra et ultrices neque ornare aenean.\n" +
  "\n" +
  "Magna etiam tempor orci eu lobortis elementum nibh tellus. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Egestas diam in arcu cursus euismod quis. Ut tristique et egestas quis ipsum suspendisse. Diam in arcu cursus euismod quis viverra. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. In eu mi bibendum neque. Ac tortor vitae purus faucibus ornare. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. A pellentesque sit amet porttitor eget dolor. Arcu ac tortor dignissim convallis aenean et tortor at risus. Amet tellus cras adipiscing enim. Pellentesque habitant morbi tristique senectus. Tortor consequat id porta nibh venenatis cras sed felis. Dui ut ornare lectus sit. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Quam nulla porttitor massa id neque aliquam vestibulum morbi.\n" +
  "\n" +
  "Cras semper auctor neque vitae. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Malesuada proin libero nunc consequat interdum varius. At elementum eu facilisis sed odio morbi quis. Ullamcorper malesuada proin libero nunc consequat. Amet venenatis urna cursus eget. Sit amet purus gravida quis blandit turpis cursus. Feugiat nisl pretium fusce id velit. Mi eget mauris pharetra et ultrices neque ornare aenean. Habitasse platea dictumst quisque sagittis purus sit amet. Consectetur libero id faucibus nisl tincidunt eget.\n" +
  "\n" +
  "Sodales ut etiam sit amet nisl purus in mollis nunc. Vel turpis nunc eget lorem. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Sed risus ultricies tristique nulla aliquet. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Consequat id porta nibh venenatis cras sed. Felis eget velit aliquet sagittis id consectetur purus. Id neque aliquam vestibulum morbi blandit. Eu non diam phasellus vestibulum lorem sed.";
function App() {
  return (
    // <div className="App">
    //
    //
    //
    //
    //   <Router>
    //     <Routes>
    //     {/*<Route exact path="/">*/}
    //       {/*<div>*/}
    //       {/*  sss*/}
    //       {/*</div>*/}
    //     {/*</Route>*/}
    //     <Route path="/about"
    //     children={          <Dots text={text}/>}/>
    //       </Routes>
    //   </Router>
    // </div>

    <Router>
      <Routes>
        {/*<Route element={<Layout />}>*/}
        <Route path="/dots" element={<Dots text={text} />} />
        <Route
          index
          element={
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link to={"/dots"}>Dots</Link>
              <Link to={"/svg"}>Svg</Link>
              <Link to={"/canvas"}>Canvas</Link>
            </div>
          }
        />
        <Route path="home" element={"ssssss"} />
        <Route path="/svg" element={<Svg text={text} />} />
        <Route path="/canvas" element={<Canvas text={text} />} />
        {/*<Route path="*" element={<p>There's no
        thing here: 404!</p>} />*/}
        {/*</Route>*/}
      </Routes>
    </Router>
  );
}

export default App;
