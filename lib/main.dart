import 'dart:ui';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    title: 'Home',
    home: MyApp(),
  ));
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Date Management'),
        centerTitle: true, // 중앙 정렬
        elevation: 0.0,
        leading: IconButton(
          icon: Icon(Icons.menu), // 햄버거버튼 아이콘 생성
          onPressed: () {
            // 아이콘 버튼 실행
            print('menu button is clicked');
          },

        ),
      actions: <Widget>[
        IconButton(
          onPressed: (){},
          icon: Icon(Icons.search,),
        ),
        IconButton(
          icon: Icon(Icons.more_vert,),
          onPressed: (){
            print('Click');
            },
        )
      ],
      ),
        drawer: Drawer(
          child: ListView(
            padding: EdgeInsets.zero,
            children: <Widget>[
              ListTile(
                leading: Icon(
                  Icons.home,
                  color: Colors.grey[850],
                ),
                title: Text('Home'),
                onTap: () {
                  print('Home is clicked');
                },
                trailing: Icon(Icons.add),
              ),
              ListTile(
                leading: Icon(
                  Icons.settings,
                  color: Colors.grey[850],
                ),
                title: Text('Setting'),
                onTap: () {
                  print('Setting is clicked');
                },
                trailing: Icon(Icons.add),
              ),
              ListTile(
                leading: Icon(
                  Icons.question_answer,
                  color: Colors.grey[850],
                ),
                title: Text('Q&A'),
                onTap: () {
                  print('Q&A is clicked');
                },
                trailing: Icon(Icons.add),
              )
            ],
          ),
        ),
    );
  }
}







//
// class MyApp extends StatelessWidget {
//   const MyApp({Key? key}) : super(key: key);
//
//   // This widget is the root of your application.
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//         title: 'Flutter Demo',
//         theme: ThemeData(
//           primarySwatch: Colors.red,
//         ),
//         home: Scaffold(
//           appBar : AppBar(
//             title : Text('Date Management'),
//             centerTitle: true,
//             elevation: 0.0,
//             actions: <Widget>[
//               IconButton(
//                 icon: Icon(Icons.search,),
//                 onPressed: (){
//                   print('Click');
//                 },
//               ),
//               IconButton(
//                 icon: Icon(Icons.more_vert,),
//                 onPressed: (){
//                   print('Click');
//                 },
//               )
//             ],
//           ),
//           drawer: Drawer(
//             child: ListView(
//               padding: EdgeInsets.zero,
//               children: <Widget>[
//                 ListTile(
//                   leading: Icon(
//                     Icons.home,
//                     color: Colors.grey[850],
//                   ),
//                   title: Text('Home'),
//                   onTap: () {
//                     print('Home click');
//                   },
//                   trailing: Icon(Icons.add),
//                 ),
//                 ListTile(
//                   leading: Icon(
//                     Icons.settings,
//                     color: Colors.grey[850],
//                   ),
//                   title: Text('Setting'),
//                   onTap: () {
//                     print('Setting Click');
//                     Navigator.push(
//                       context,
//                       MaterialPageRoute(builder: (context) => SettingTab()),
//                     );
//                   },
//                   trailing: Icon(Icons.add),
//                 ),
//                 ListTile(
//                   leading: Icon(
//                     Icons.question_answer,
//                     color: Colors.grey[850],
//                   ),
//                   title: Text('Q&A'),
//                   onTap: () {
//                     print('Q&A click');
//                   },
//                   trailing: Icon(Icons.add),
//                 )
//               ],
//             ),
//           ),
//           body: Text('으악'),
//         )
//     );
//   }
// }
//
//
// class SettingTab extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text('Setting'),),
//     );
//   }
// }

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}