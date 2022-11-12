!>このモジュールでは，文字列操作に関する手続を提供する．
!>
!>手続には，
!>
!>- 宛名を指定して歓迎のメッセージを作成する手続
!>
!>が含まれる．
!>
module greeting
    implicit none
    private
    public :: create_greeting_message_to

contains
    !>歓迎のメッセージを返す．
    pure function create_greeting_message_to(name) result(message)
        implicit none
        character(*), intent(in) :: name
            !! メッセージの宛名
        character(:), allocatable :: message
            !! 歓迎のメッセージ

        message = "Hello "//name//" !"
    end function create_greeting_message_to
end module greeting
