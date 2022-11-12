!>モジュール`[[greeting(module)]]`で定義されている手続をテストする．
!>
!>テストには
!>
!>- 宛名を指定して歓迎のメッセージを作成する手続
!>`[[greeting(module):create_greeting_message_to(function)]]`
!>に対するテスト
!>
!>が含まれる．
!>
program main
    use :: greeting
    implicit none

    interface assert
        procedure :: assert_str_str
    end interface

    character(*), parameter :: name = "GitHub Actions"
    character(*), parameter :: expected = "Hello "//name//" !"
    character(:), allocatable :: actual

    actual = create_greeting_message_to(name)

    call assert(actual, expected)

contains
    !>二つの文字列`actual`, `expected`が等しいかを検査する．
    !>等しくない場合は，それぞれの内容を表示して`error stop`する．
    subroutine assert_str_str(actual, expected)
        implicit none
        character(*), intent(in) :: actual
        character(*), intent(in) :: expected

        if (trim(actual) == trim(expected)) then
            print *, "PASSED"
        else
            print *, "FAILED"
            print *, "    Actual  : "//actual
            print *, "    Expected: "//expected
            error stop
        end if
    end subroutine assert_str_str
end program main
