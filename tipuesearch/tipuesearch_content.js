var tipuesearch = {"pages":[{"title":" greeting ","text":"greeting This is a landing page of the greeting api document. Developer Info Tomohiro Degawa","tags":"home","loc":"index.html"},{"title":"create_greeting_message_to – greeting","text":"public pure function create_greeting_message_to(name) result(message) 歓迎のメッセージを返す． Arguments Type Intent Optional Attributes Name character, intent(in) :: name メッセージの宛名 Return Value character,allocatable 歓迎のメッセージ Called by proc~~create_greeting_message_to~~CalledByGraph proc~create_greeting_message_to create_greeting_message_to program~main main program~main->proc~create_greeting_message_to Help × Graph Key Nodes of different colours represent the following: Graph Key Subroutine Subroutine Function Function Interface Interface Unknown Procedure Type Unknown Procedure Type Program Program This Page's Entity This Page's Entity Solid arrows point from a procedure to one which it calls. Dashed \n    arrows point from an interface to procedures which implement that interface.\n    This could include the module procedures in a generic interface or the\n    implementation in a submodule of an interface in a parent module. Where possible, edges connecting nodes are given different colours to make them easier to distinguish in large graphs. Contents None","tags":"","loc":"proc/create_greeting_message_to.html"},{"title":"assert_str_str – greeting","text":"subroutine assert_str_str(actual, expected) 二つの文字列 actual , expected が等しいかを検査する．\n等しくない場合は，それぞれの内容を表示して error stop する． Arguments Type Intent Optional Attributes Name character, intent(in) :: actual character, intent(in) :: expected Called by proc~~assert_str_str~~CalledByGraph proc~assert_str_str assert_str_str interface~assert assert interface~assert->proc~assert_str_str program~main main program~main->interface~assert Help × Graph Key Nodes of different colours represent the following: Graph Key Subroutine Subroutine Function Function Interface Interface Unknown Procedure Type Unknown Procedure Type Program Program This Page's Entity This Page's Entity Solid arrows point from a procedure to one which it calls. Dashed \n    arrows point from an interface to procedures which implement that interface.\n    This could include the module procedures in a generic interface or the\n    implementation in a submodule of an interface in a parent module. Where possible, edges connecting nodes are given different colours to make them easier to distinguish in large graphs. Contents None","tags":"","loc":"proc/assert_str_str.html"},{"title":"assert – greeting","text":"public interface assert Calls interface~~assert~~CallsGraph interface~assert assert proc~assert_str_str assert_str_str interface~assert->proc~assert_str_str Help × Graph Key Nodes of different colours represent the following: Graph Key Subroutine Subroutine Function Function Interface Interface Unknown Procedure Type Unknown Procedure Type Program Program This Page's Entity This Page's Entity Solid arrows point from a procedure to one which it calls. Dashed \n    arrows point from an interface to procedures which implement that interface.\n    This could include the module procedures in a generic interface or the\n    implementation in a submodule of an interface in a parent module. Where possible, edges connecting nodes are given different colours to make them easier to distinguish in large graphs. Called by interface~~assert~~CalledByGraph interface~assert assert program~main main program~main->interface~assert Help × Graph Key Nodes of different colours represent the following: Graph Key Subroutine Subroutine Function Function Interface Interface Unknown Procedure Type Unknown Procedure Type Program Program This Page's Entity This Page's Entity Solid arrows point from a procedure to one which it calls. Dashed \n    arrows point from an interface to procedures which implement that interface.\n    This could include the module procedures in a generic interface or the\n    implementation in a submodule of an interface in a parent module. Where possible, edges connecting nodes are given different colours to make them easier to distinguish in large graphs. Contents Module Procedures assert_str_str Module Procedures subroutine assert_str_str (actual, expected) 二つの文字列 actual , expected が等しいかを検査する．\n等しくない場合は，それぞれの内容を表示して error stop する． Arguments Type Intent Optional Attributes Name character, intent(in) :: actual character, intent(in) :: expected","tags":"","loc":"interface/assert.html"},{"title":"greeting – greeting","text":"このモジュールでは，文字列操作に関する手続を提供する． 手続には， 宛名を指定して歓迎のメッセージを作成する手続 が含まれる． Used by module~~greeting~~UsedByGraph module~greeting greeting program~main main program~main->module~greeting Help × Graph Key Nodes of different colours represent the following: Graph Key Module Module Submodule Submodule Subroutine Subroutine Function Function Program Program This Page's Entity This Page's Entity Solid arrows point from a submodule to the (sub)module which it is\n    descended from. Dashed arrows point from a module or program unit to \n    modules which it uses. Where possible, edges connecting nodes are given different colours to make them easier to distinguish in large graphs. Contents Functions create_greeting_message_to Functions public pure function create_greeting_message_to (name) result(message) 歓迎のメッセージを返す． Arguments Type Intent Optional Attributes Name character, intent(in) :: name メッセージの宛名 Return Value character,allocatable 歓迎のメッセージ","tags":"","loc":"module/greeting.html"},{"title":"main – greeting","text":"Uses greeting program~~main~~UsesGraph program~main main module~greeting greeting program~main->module~greeting Help × Graph Key Nodes of different colours represent the following: Graph Key Module Module Submodule Submodule Subroutine Subroutine Function Function Program Program This Page's Entity This Page's Entity Solid arrows point from a submodule to the (sub)module which it is\n    descended from. Dashed arrows point from a module or program unit to \n    modules which it uses. Where possible, edges connecting nodes are given different colours to make them easier to distinguish in large graphs. モジュール greeting で定義されている手続をテストする． テストには 宛名を指定して歓迎のメッセージを作成する手続 create_greeting_message_to に対するテスト が含まれる． Calls program~~main~~CallsGraph program~main main proc~create_greeting_message_to create_greeting_message_to program~main->proc~create_greeting_message_to interface~assert assert program~main->interface~assert proc~assert_str_str assert_str_str interface~assert->proc~assert_str_str Help × Graph Key Nodes of different colours represent the following: Graph Key Subroutine Subroutine Function Function Interface Interface Unknown Procedure Type Unknown Procedure Type Program Program This Page's Entity This Page's Entity Solid arrows point from a procedure to one which it calls. Dashed \n    arrows point from an interface to procedures which implement that interface.\n    This could include the module procedures in a generic interface or the\n    implementation in a submodule of an interface in a parent module. Where possible, edges connecting nodes are given different colours to make them easier to distinguish in large graphs. Contents Variables actual expected name Interfaces assert Subroutines assert_str_str Variables Type Attributes Name Initial character, allocatable :: actual character, parameter :: expected = \"Hello \"//name//\" !\" character, parameter :: name = \"GitHub Actions\" Interfaces interface assert subroutine assert_str_str (actual, expected) 二つの文字列 actual , expected が等しいかを検査する．\n等しくない場合は，それぞれの内容を表示して error stop する． Arguments Type Intent Optional Attributes Name character, intent(in) :: actual character, intent(in) :: expected Subroutines subroutine assert_str_str (actual, expected) 二つの文字列 actual , expected が等しいかを検査する．\n等しくない場合は，それぞれの内容を表示して error stop する． Arguments Type Intent Optional Attributes Name character, intent(in) :: actual character, intent(in) :: expected","tags":"","loc":"program/main.html"},{"title":"greeting.f90 – greeting","text":"Files dependent on this one sourcefile~~greeting.f90~~AfferentGraph sourcefile~greeting.f90 greeting.f90 sourcefile~main.f90 main.f90 sourcefile~main.f90->sourcefile~greeting.f90 Help × Graph Key Nodes of different colours represent the following: Graph Key Source File Source File This Page's Entity This Page's Entity Solid arrows point from a file to a file which it depends on. A file\n    is dependent upon another if the latter must be compiled before the former\n    can be. Where possible, edges connecting nodes are given different colours to make them easier to distinguish in large graphs. Contents Modules greeting Source Code greeting.f90 Source Code !>このモジュールでは，文字列操作に関する手続を提供する． !> !>手続には， !> !>- 宛名を指定して歓迎のメッセージを作成する手続 !> !>が含まれる． !> module greeting implicit none private public :: create_greeting_message_to contains !>歓迎のメッセージを返す． pure function create_greeting_message_to ( name ) result ( message ) implicit none character ( * ), intent ( in ) :: name !! メッセージの宛名 character (:), allocatable :: message !! 歓迎のメッセージ message = \"Hello \" // name // \" !\" end function create_greeting_message_to end module greeting","tags":"","loc":"sourcefile/greeting.f90.html"},{"title":"main.f90 – greeting","text":"This file depends on sourcefile~~main.f90~~EfferentGraph sourcefile~main.f90 main.f90 sourcefile~greeting.f90 greeting.f90 sourcefile~main.f90->sourcefile~greeting.f90 Help × Graph Key Nodes of different colours represent the following: Graph Key Source File Source File This Page's Entity This Page's Entity Solid arrows point from a file to a file which it depends on. A file\n    is dependent upon another if the latter must be compiled before the former\n    can be. Where possible, edges connecting nodes are given different colours to make them easier to distinguish in large graphs. Contents Programs main Source Code main.f90 Source Code !>モジュール`[[greeting(module)]]`で定義されている手続をテストする． !> !>テストには !> !>- 宛名を指定して歓迎のメッセージを作成する手続 !>`[[greeting(module):create_greeting_message_to(function)]]` !>に対するテスト !> !>が含まれる． !> program main use :: greeting implicit none interface assert procedure :: assert_str_str end interface character ( * ), parameter :: name = \"GitHub Actions\" character ( * ), parameter :: expected = \"Hello \" // name // \" !\" character (:), allocatable :: actual actual = create_greeting_message_to ( name ) call assert ( actual , expected ) contains !>二つの文字列`actual`, `expected`が等しいかを検査する． !>等しくない場合は，それぞれの内容を表示して`error stop`する． subroutine assert_str_str ( actual , expected ) implicit none character ( * ), intent ( in ) :: actual character ( * ), intent ( in ) :: expected if ( trim ( actual ) == trim ( expected )) then print * , \"PASSED\" else print * , \"FAILED\" print * , \"    Actual  : \" // actual print * , \"    Expected: \" // expected error stop end if end subroutine assert_str_str end program main","tags":"","loc":"sourcefile/main.f90.html"}]}